import React from 'react';

import PageHeader from '../../components/PageHeader';


import './styles.css';
import TeacherItem from '../../components/TeacherItem';

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horario</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
        <TeacherItem/>
        </div>
        )
}

export default TeacherList;