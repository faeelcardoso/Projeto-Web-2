import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string; // Obrigatória, vai para todas as páginas
    description?: string; // não é obrigatória, coloco o "?", pois não vai para todas as páginas
}

const PageHeader: React.FC<PageHeaderProps> = (props) => { 
    /* Esse PageHeader é uma FunctionComponent e recebe as propriedades de PageHeaderProps */ 
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{ props.description }</p> } {/* só irá mostrar, se props.description for true */}

                { props.children } {/* children são todos os conteúdos da props */}
            </div>
        </header>
    )
}

export default PageHeader;