import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label: string
}

// InputHTMLAttibutes = TODAS as opções do HTML

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={ name }>{ label }</label>
            <input type="text" id={ name } { ...rest } />
            {/* O input sempre tenho que colocar o ...rest, para ter literalmente todas as opções do HTML imbutido */}
        </div>
    )
}

export default Input