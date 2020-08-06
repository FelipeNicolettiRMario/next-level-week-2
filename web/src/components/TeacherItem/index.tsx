import React from 'react';

import './styles.css';

import whatsapp from '../../assets/images/icons/whatsapp.svg'


function TeacherItem(){
    return (
        <main>
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/1281361907790864386/NMoBABTZ_400x400.jpg" alt="Perfil"/>
                <div>
                    <strong>Felipe Nicoletti Reis Mario</strong>
                    <span>Programação de computadores e pa</span>
                </div>
            </header>
            <p>
                suahsuahsaushaushuahushsauhasuashaushsauhsausahusahasuhsauas
                <br/><br/>
                hauasuhasushasuhsauahsuashasuhsaushauashsa
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsapp} alt="Entrar em contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    </main>
    )
}

export default TeacherItem;