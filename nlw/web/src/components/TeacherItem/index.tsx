import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

import api from '../../services/api';

export interface Teacher {
    id: number,
    avatar: string,
    bio: string,
    cost: string,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps { // Fazer props das imagens, texto e tudo mais depois!
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => { 
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={ teacher.avatar } alt={ teacher.name } />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{ teacher.bio }</p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$  {teacher.cost}</strong>
                </p>
                <a target=".blank" onClick={ createNewConnection } href={`http://wa.me/${teacher.whatsapp}`}>
                    <img src={whatsappIcon} alt="Wpp" />
                            Entrar em contato
                        </a>
            </footer>
        </article>
    )
}
  
export default TeacherItem;