import React, { useState, FormEvent , useEffect} from 'react';

import PageHeader from '../../components/PageHeader';


import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList(){
    const [subject,setSubject] = useState('');
    const [week_day,setWeekDay] = useState('');
    const [time,setTime] = useState('');

    const [teacherItem,setTeacherItem] = useState([])

    async function searchTeachers(e:FormEvent){
        e.preventDefault();

        const response = await api.get('/aula',{
            params:{
                subject,
                week_day,
                time
            }
        });

        if(response.status === 200){
            setTeacherItem(response.data);          
        }
        else{
            alert("Erro ao procurar!");
        }
    }
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                    name="subject" 
                    label="Matéria"
                    onChange = {value=>setSubject(value.target.value)}
                    options={[
                        {value:"Artes",label:"Artes"},
                        {value:"Historia",label:"Historia"},
                        {value:"Geografia",label:"Geografia"},
                        {value:"Matemática",label:"Matemática"},
                        {value:"Filosofia",label:"Filosofia"},
                        {value:"Química",label:"Química"},
                        {value:"Física",label:"Física"},

                    ]}
                />
                <Select 
                    name="week_day" 
                    label="Dia da semana"
                    onChange = {value=>setWeekDay(value.target.value)}
                    options={[
                        {value:"0",label:"Domingo"},
                        {value:"1",label:"Segunda"},
                        {value:"2",label:"Terça"},
                        {value:"3",label:"Quarta"},
                        {value:"4",label:"Sexta"},
                        {value:"5",label:"Sabado"},
                        {value:"6",label:"Domingo"},

                    ]}
                />
                <Input type="time" name="time" label="Horário" 
                    onChange = {value=>setTime(value.target.value)}
                />
                <button type="submit">
                    Buscar
                </button>
                </form>
            </PageHeader>
            {teacherItem.map((item)=>{
                return <TeacherItem teacherItems={item}/>
            })}
        </div>
        )
}

export default TeacherList;