import React, { useContext, useEffect } from 'react';
import "../survey.css";
import { MyContext } from '../../ContextApi/ContexApi';
import logo from "../../Image/1200-300 (1).png";
import { useNavigate } from 'react-router-dom';

function FirstSurvey() {

    const { levels, setLevels } = useContext(MyContext);

    useEffect(() => {
        const addressLink = window.location.href.split('/');
        const activation = addressLink[addressLink.length - 1];
        setLevels(activation)
        console.log(activation)
        console.log(levels)
    }, [])

    const navigate = useNavigate()

    const nextStep = () =>{
        navigate("/2")
    }

    return (


        <div class="question-survey">
            <div className='first-step'>
                <div className='img-ques'>
                    <img src={logo} style={{ height: "auto", width: "100%" }} />
                </div>
                <div className='h4-ques'>
                    <h4>به نظرسنجی  ماشین نو خوش آمدید</h4>
                </div>
                <div className='span-ques'>
                    <span>با شرکت در نظرسنجی به ما در بهبود عملکرد کمک شایانی خواهید کرد.</span>
                </div>
                <div className='butt-ques'>
                    <button className='begin-surveytn' onClick={nextStep}>شروع نظرسنجی</button>
                </div>
            </div>
        </div>

    )
}

export default FirstSurvey