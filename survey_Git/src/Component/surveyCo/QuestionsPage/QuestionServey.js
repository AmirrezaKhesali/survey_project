import React, { useEffect } from 'react';
import "./QuestionSurvey.css";
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";



function QuestionServey(props) {


    useEffect(()=>{
        console.log(props.showInput)
        console.log(props.leveling)
    },[])


    return (


        <div className="question-survey">
            <div className='head-question'>
                <span style={{ display: 'flex' }} onClick={props.backlink}><IoIosArrowRoundForward size={30} color='' /></span>

                <span className='headque-span'>{props.question}</span>

            </div>
             <hr className={`w-100 my-0 ${props.leveling==='1' ? 'first' :null} ${props.leveling==='2' ? 'second' :null} ${props.leveling==='3' ? 'third' :null} ${props.leveling==='4' ? 'fourth' :null} ${props.leveling==='5' ? 'fifth' :null}`}/>
            <div className='body-question px-2'>
                <div className='bodyque-div'>
                    <input type="radio" name="radio" className='divque-input' value="1" onChange={props.handleChange} checked={props.checked === '1'} />
                    <span className='divque-span'>{props.answer1}</span>
                </div>
                <div className='bodyque-div'>
                    <input type="radio" name="radio" className='divque-input' value="2" onChange={props.handleChange} checked={props.checked === '2'} />
                    <span className='divque-span'>{props.answer2}</span>
                </div>
                <div className='bodyque-div'>
                    <input type="radio" name="radio" className='divque-input' value="3" onChange={props.handleChange} checked={props.checked === '3'} />
                    <span className='divque-span'>{props.answer3}</span>
                </div>
                <div className='bodyque-div'>
                    <input type="radio" name="radio" className='divque-input' value="4" onChange={props.handleChange} checked={props.checked === '4'} />
                    <span className='divque-span'>{props.answer4}</span>
                </div>
            </div>
        
                <div className={`mb-4 text-start px-2 mt-2 w-100 d-none ${props.showInput}`}>
                    <label htmlFor="textInput" className="form-label">لطفا دلیل عدم رضایت کامل خود را بنویسید</label>
                    <input type="text" className="form-control" id="textInput" onChange={props.couse} style={{height: 60}} />
                </div>
         
            <div className='btn-question'>
                <button className='btnque-button' onClick={props.clicked}>
                    {props.btnText}
                </button>
            </div>

        </div>


    )
}

export default QuestionServey