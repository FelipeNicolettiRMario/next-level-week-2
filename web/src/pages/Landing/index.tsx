import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import './style.css';
import api from '../../services/api';

function Landing(){
    
    const [acess,setAcess] = useState(0);

    useEffect(()=>{
        async function getAcess() {
            const response = await api.get('/connections')
            if(response.status === 200){
                setAcess(response.data.total);
            }
        }
        getAcess();
    },[])

    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Sua plataforma de estudos online</h2>
            </div>
            <img 
            src={landingImg} 
            alt="Plataforma de estudos"
            className="hero-image"
            />
            <div className="buttons-container">
                <Link to="/study" className="study">
                    <img src={studyIcon} alt="Estudar"/>
                    Estudar
                </Link>

                <Link to="/give-classes" className="give-classes">
                    <img src={giveClassesIcon} alt="Dar Aulas"/>
                    Dar Aulas
                </Link>

                <span className="total-connections">
                    Total de {acess} conexões já realizadas <img src={purpleHeart} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    </div>
    )
}

export default Landing;