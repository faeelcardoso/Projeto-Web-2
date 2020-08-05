import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

interface TeacherItemProps { // Fazer props das imagens, texto e tudo mais depois!
    name: string;
    materia: string;
    preco: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => { 
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/61153391?s=460&u=0ceb714b0d0045ad2a719b1b333ab38f0c635f15&v=4" alt="Raphael Marques" />
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.materia}</span>
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
                    <strong>R$  {props.preco}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Wpp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}
  
export default TeacherItem;