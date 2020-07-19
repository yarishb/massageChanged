import React, {useState} from 'react';
import './modalWindow.css'
import { Icon } from '@iconify/react';
import closeIcon from '@iconify/icons-carbon/close';
import userAvatarFilledAlt from '@iconify/icons-carbon/user-avatar-filled-alt';
import phoneOutlined from '@iconify/icons-ant-design/phone-outlined';
import Axios from 'axios';

function  ModalWindow (props){

    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [errorMessage, setError] = useState(true)

    const post = (e) => {
        e.preventDefault()
        console.log(number);
            Axios.post("https://radiant-hollows-78182.herokuapp.com/", 
            {nameToSend:name, numberToSend: number})
            .then(
                setError(false), 
                setName(""),
                setNumber("")
            )
        }
        


    function numberHandler(e){
        setNumber(e.target.value)
        console.log(number);
    }

    function nameHandler(e){
        setName(e.target.value)
    }

    let dialog = (
            <>
            <div className="modalFull" onClick = {props.isClose}></div>
            <div className="modalCenter" >
                <div className="modal">
                <Icon  icon={closeIcon} className="modalClose"  onClick={props.isClose}/>
                    <div className="inputHeading">
                        Забронювати Масаж
                    </div>
                    <div className="inputSubHeading">
                        щоб забронювати масаж, залиште нам свої контакти, ми вам зателефонуєм.
                    </div>
                    <form onSubmit={post}>
                    <div className="inputRelative">
                    <Icon className="inputIcon" icon={userAvatarFilledAlt}  width="30px" height="30px"/>
                    <input className="inputInput" value={name}  name="name" required  onChange={(e) => nameHandler(e)} placeholder="Введіть ваше імя"/>           
                    </div>
                    <div className="inputRelative">
                    <Icon className="inputIcon" icon={phoneOutlined} width="30px" height="30px"/>
                    <input className="inputInput" value={number} required  name="number" onChange={(e) => numberHandler(e)} placeholder="Введіть ваш номер телефону"/>
                    </div>
                    <button className="inputButton" type="submit">Надіслати</button>
                    </form>
                    {!errorMessage && <div className="success">
                        Заявка успішно надіслана
                    </div>}
                </div>
        </div>

    </>
    )

    if(! props.isOpen) {
        dialog = null;
    }

    return(
        <>
        {dialog}
        </>
    )
}

export default ModalWindow;