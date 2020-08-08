import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <Select 
                        name="subject"
                        label="Matéria:" 
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
                    <Input type="time" name="time" label="Hora:" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem name="Raphael Marques" materia="Química" preco="80,00" /> 
                <TeacherItem name="José Araudo" materia="Matemática" preco="60,00" />
                <TeacherItem name="Cacildo de Farias" materia="Português" preco="40,00" />
                <TeacherItem name="Teteco Toyonho" materia="Geografia" preco="20,00" />
            </main>
        </div>
    )
}

export default TeacherList;