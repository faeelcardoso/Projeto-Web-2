import React from 'react'

import PageHeader from '../../components/PageHeader'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria:</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana:</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora:</label>
                        <input type="text" id="subject" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/61153391?s=460&u=0ceb714b0d0045ad2a719b1b333ab38f0c635f15&v=4" alt="Raphael Marques"/>
                        <div>
                            <strong>Raphael Marques</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através 
                        de experiências. Mais de 200.000 pessoas já passaram por uma das minha explosões. 
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={ whatsappIcon } alt="Wpp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    )
}

export default TeacherList;