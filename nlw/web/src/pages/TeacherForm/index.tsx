import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api';

import './styles.css'

function TeacherForm() {
    const history = useHistory() // para navegar para outra página após um clique

    // Estados
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            // por causa do estado, as variáveis do React não são modificaveis, ou seja, com o spread eu copio as inf da variável
            { week_day: 0, from: '', to: '' }
            // e mudo as inf da variável, criando meu novo ScheduleItem
            // Dessa forma o React vai entender que eu alterei a variável e irá criar um nova toda vez que eu chamar addNewScheduleItem
        ])
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index)=> {
            if (index === position) { // se o index clicado for === ao index da aplicação
                return { ...scheduleItem, [field]: value } // irá retornar o mesmo scheduleItem porém com o valor do week_day alterado
            }

            return scheduleItem // se não, retorna o mesmo scheduleItem, ou seja, zerado
        })

        setScheduleItems(updatedScheduleItems)
    }

    function handleCleateClass(e: FormEvent) {
        e.preventDefault() // para tirar o comportamento normal do formulário, de a cada submit dar reload na tela

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!')

            history.push('/') // para mandar para a tela principal, LandingPage
        }).catch(() => {
            alert('Erro no cadastro!')
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição" />

            <main>
                <form onSubmit={ handleCleateClass }> 
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome completo:"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <Input
                            name="avatar"
                            label="Avatar:"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />

                        <Input
                            name="whatsapp"
                            label="WhatsApp:"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />

                        <Textarea
                            name="bio"
                            label="Biografia:"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="Matéria:"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'História', label: 'História' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Inglês', label: 'Inglês' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Sociologia', label: 'Sociologia' },
                                { value: 'Filosofia', label: 'Filosofia' },
                            ]}
                        />

                        <Input
                            name="cost"
                            label="Custo da sua hora por aula:"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horário
                        </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => { // lembrando que todo map tem que ter um key pra n buga
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item"> {/* Para o usuário criar apenas um horario por dia */}
                                    <Select
                                        name="week_day"
                                        label="Dia da semana:"
                                        value={ scheduleItem.week_day }
                                        onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' }
                                        ]}
                                    />
                                    <Input 
                                        name="from" 
                                        label="Das" 
                                        type="time" 
                                        value={ scheduleItem.from }
                                        onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                                    />

                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time" 
                                        value={ scheduleItem.to }
                                        onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante!" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;