import React,{useState, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm(){
    
    const history = useHistory();

    const [scheduleItem,setScheduleItem] = useState([
        {week_day:0,from:'',to:''}
    ]);

    const [form,setForm] = useState({
        name:'',
        avatar:'',
        whatsapp:'',
        bio:'',
        subject:'',
        cost:0.0,
        schedule:scheduleItem
    })

    function addScheduleItem() {
       setScheduleItem([
           ...scheduleItem,
           {week_day:0,from:'',to:''}
       ])
       
    }

    function setScheduleItemValue(position:number,field:string,value:string){
        const updateScheduleItem = scheduleItem.map((item,index)=>{
            if(index === position){
                return {...item,[field]:value}
            }

            return item;
        });
        
        setScheduleItem(updateScheduleItem);
        setForm({...form,schedule:scheduleItem});
    }

    function handleForm(e:FormEvent){
        e.preventDefault();

        api.post('/aula',form)
            .then(()=>{
                alert("Cadastrado com sucesso!");
            })
            .catch((error)=>{
                alert("Erro ao cadastrar");
            })

        history.push('/');    

    }
    return (
        <div id="page-teacher-form">
            <PageHeader title="Quem bom que você quer dar aulas"
            description="O primeiro passo é preencher esse formulário de inscrição"/>

        <main>
           <form onSubmit={handleForm}>
            <fieldset>
                <legend>Seus dados</legend>

                <Input name="name" label="Nome Completo" value={form.name}
                    onChange={(value)=>{
                        setForm({...form,name:value.target.value})
                    }}
                />

                <Input name="avatar" label="Avatar"  value={form.avatar} 
                    onChange={(value)=>{
                        setForm({...form,avatar:value.target.value})
                    }}
                />

                <Input name="whatsapp" label="whatsapp" value={form.whatsapp}
                    onChange={(value)=>{
                        setForm({...form,whatsapp:value.target.value})
                    }}
                />
                
                <TextArea name="bio" label="Biografia" value={form.bio}
                    onChange={(value)=>{
                        setForm({...form,bio:value.target.value})
                    }}
                />


            </fieldset>

            <fieldset>
                <legend>Sobre a aula</legend>

                <Select 
                    name="subject" 
                    label="Matéria"
                    options={[
                        {value:"Artes",label:"Artes"},
                        {value:"Historia",label:"Historia"},
                        {value:"Geografia",label:"Geografia"},
                        {value:"Matemática",label:"Matemática"},
                        {value:"Filosofia",label:"Filosofia"},
                        {value:"Química",label:"Química"},
                        {value:"Física",label:"Física"},

                    ]}
                    onChange={(value)=>{
                        setForm({...form,subject:value.target.value})
                    }}
                />

                <Input name="cost" label="Custo da sua hora por aula" value={form.cost}
                    onChange={(value)=>{
                        setForm({...form,cost:Number(value.target.value)})
                    }} 
                />

            </fieldset>

            
            <fieldset>
                <legend>Horários disponíveis
                    <button type="button" onClick={addScheduleItem}>
                        +Novo Horario
                    </button>
            </legend>
                {scheduleItem.map((item,index)=>{
                    return (                
                    <div key={item.week_day} className="schedule-item">
                        <Select 
                                name="week_day" 
                                label="Dia da semana"
                                value={item.week_day}
                                onChange = {(value)=>{setScheduleItemValue(index,'week_day',value.target.value)}}
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
                        <Input name="from" label="Das" type="time" value={item.from}
                            onChange = {(value)=>{setScheduleItemValue(index,'from',value.target.value)}}
                        />
                        <Input name="to" label="Até" type="time" value={item.to}
                            onChange = {(value)=>{setScheduleItemValue(index,'to',value.target.value)}}
                        /> 
                </div>
                )
               }
              )
            }
            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso Importante"/>
                    Importante!<br/>
                    Preencha todos os dados
                </p>
                <button type="submit">
                    Salvar cadastro
                </button>
            </footer>
         </form> 
        </main>
        </div>
    )
}

export default TeacherForm;