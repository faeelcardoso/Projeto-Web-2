import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input'
import Select from '../../components/Select'

import api from '../../services/api';

import './styles.css'

function TeacherList() {
    // Estados
    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeek_Day] = useState('')
    const [time, setTime] = useState('')

    async function searchTeachers(e: FormEvent) {
        e.preventDefault() // para o form não ficar dando reload a cada submit

        const response = await api.get('classes', { 
            params: {
                subject,
                week_day,
                time
            }
            // mesma coisa do .then no TeacherForm, só fiz de outro jeito para lembrar
            // ele vai aguardar o await finalizar e irá devolver uma resposta
        })

        setTeachers(response.data) // armazenar a resposta da API no estado 
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers" onSubmit={ searchTeachers }>
                    <Select 
                        name="subject"
                        label="Matéria:" 
                        value={ subject }
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
                    <Select 
                        name="week_day"
                        label="Dia da semana:" 
                        value={ week_day }
                        onChange={(e) => { setWeek_Day(e.target.value) }}
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
                        type="time" 
                        name="time" 
                        label="Hora:" 
                        value={ time }
                        onChange={(e) => { setTime(e.target.value) }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => { // Para exibir os professores quando buscar
                   return <TeacherItem key={ teacher.id } teacher={ teacher } />
                })}

            </main>
        </div>
    )
}

export default TeacherList;