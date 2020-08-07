import express, { json } from 'express'
import db from './database/connection'

import convertHourToMinutes from './utils/convertHourToMinutes'

const routes = express.Router()

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

routes.post('/classes', async (req, resp) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = req.body // dados

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
    
        return resp.status(201).send()

    } catch(err) {
        await trx.rollback()

        return resp.status(400).json({
            error: 'Unexpected error while creating new class'
        })
    }
})

export default routes