import { Request, Response } from 'express'

import db from '../database/connection'

import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduleItem { // grande TS trabalhando!
    week_day: number,
    from: string,
    to: string
}

// Métodos:
/*
GET: Buscar ou listar uma informação.
POST: Criar alguma nova informação.
PUT: Atualizar uma informação existente.
DELETE: Deletar uma informação existente.
*/

// Corpo (Request Body): Dados para criação ou atualização de um registro 
// Route Params: Identificar qual recurso eu quero atualizar ou deletar :id
// Query Params: Paginação, filtros, ordenação

export default class ClassesController {
    async index(request: Request, response: Response) {
        const filters = request.query 

        const subject = filters.subject as string
        const week_day = filters.week_day as string
        const time = filters.time as string

        if (!filters.week_day || !filters.subject || !filters.time) { // se o usuário não informar algum desses, erro.
            return response.status(400).json({
                erro: 'Missing filters to search classes'
            })
        }

        const timeInMinutes = convertHourToMinutes(time)

        const classes = await db('classes')
            .whereExists(function() { // não pode ser arrow function, se não, não consigo usar o this
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`') 
                    // o id da tabela class_schedule, tem que ser o msm id da tabela classes
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)]) 
                    // só quero chamar os week_day, da tab class_schedule que forem iguais o week_day que criei ali,
                    // significa que o professor trabalha esse dia da semana
                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                    // Ele é true se a hr que ele começar a ralar for < ou = a hora enviada para agendamento
                    .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
                    // Será true se a hr que ele acaba de trabalhar tem que ser >, que a hr enviada para agendar
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*'])
            
            // TOP DEMAIS!
        return response.json(classes)
    }

    async create (request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body // dados
    
        const trx = await db.transaction() // para fazer todas executarem ao mesmo tempo
    
        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            })
        
        
        
            const user_id = insertedUsersIds[0] // o primeiro inserido
        
            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id
            })
        
        
        
            const class_id = insertedClassesIds[0]
        
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                    class_id
                }
            })
        
            await trx('class_schedule').insert(classSchedule)
        
            await trx.commit()
        
            return response.status(201).send()
    
        } catch(err) {
            await trx.rollback()
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
}