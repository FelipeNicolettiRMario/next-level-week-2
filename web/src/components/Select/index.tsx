import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name:string,
    label:string,
    options:Array<{
        value:string,
        label:string
    }>
}

const Select:React.FC<SelectProps> = ({name,label,options,...rest}) =>{
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}>
                <option value="" disabled selected hidden>Selecione uma opção</option>
                {options.map((value) => {
                    return <option key={value.value} value={value.value}>{value.label}</option>
                })}
            </select>
        </div>
    )
}

export default Select;