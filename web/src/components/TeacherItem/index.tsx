import React from 'react';

import './styles.css';

import whatsapp from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

interface TeacherItemProps{
    teacherItems:{
        id:number,
        avatar:string,
        name:string,
        whatsapp:string,
        bio:string,
        subject:string,
        cost:number
    }
}

const TeacherItem:React.FC<TeacherItemProps> = ({teacherItems}) =>{
    function createNewConnection(){
        api.post('/connections',{
            class_id:teacherItems.id
        })
    }

    return (
        <main>
        <article className="teacher-item">
            <header>
                <img src={teacherItems.avatar} alt="Perfil"/>
                <div>
                    <strong>{teacherItems.name}</strong>
                    <span>{teacherItems.subject}</span>
                </div>
            </header>
            <p>
                {teacherItems.bio}
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R${teacherItems.cost}</strong>
                </p>
                <a type="button" onClick={createNewConnection} href={`https://wa.me/${teacherItems.whatsapp}`}>
                    <img src={whatsapp} alt="Entrar em contato"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    </main>
    )
}

export default TeacherItem;