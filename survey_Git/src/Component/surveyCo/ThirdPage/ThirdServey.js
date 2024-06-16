import React, { useContext, useEffect } from 'react';
import "../survey.css";
import { MyContext } from '../../ContextApi/ContexApi';
import logo from "../../Image/1200-300 (1).png";
import { useNavigate } from 'react-router-dom';


function ThirdServey() {

  const { levels, setLevels } = useContext(MyContext);

  useEffect(() => {
    const addressLink = window.location.href.split('/');
    const activation = addressLink[addressLink.length - 1];
    setLevels(activation)
  }, [])

  const navigate = useNavigate()

  const finishClicked = () => {
    navigate("/1")
  }

  return (


    <div class="question-survey">
      <div className='first-step'>
        <div className='img-ques'>
          <img src={logo} style={{ height: "auto", width: "100%" }} />
        </div>
        <div className='h4-ques'>
          <h4>از همکاری شما سپاسگزاریم !</h4>
        </div>
        <div className='span-ques'>
          <span>از شما بابت همراهی ما در این نظر سنجی بسیار متشکریم. نظرات شما می تواند کمک فراوانی به ما در کسب و کار کند.</span>
        </div>
        <div className='butt-ques'>
          <button className='begin-surveytn' onClick={finishClicked}>ثبت نظرات</button>
        </div>
      </div>
    </div>

  )
}

export default ThirdServey