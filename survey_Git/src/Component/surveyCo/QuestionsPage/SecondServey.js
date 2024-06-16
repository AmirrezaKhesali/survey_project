import React, { useContext, useEffect, useState } from 'react';
import "../survey.css";
import { useNavigate } from 'react-router';
import QuestionServey from './QuestionServey';
import { MyContext } from '../../ContextApi/ContexApi';



function SecondServey() {


  const { levels, setLevels } = useContext(MyContext);
  const [convert, setConvert] = useState('1');

  const [check1, setCheck1] = useState("")
  const [check2, setCheck2] = useState("")
  const [check3, setCheck3] = useState("")
  const [check4, setCheck4] = useState("")
  const [check5, setCheck5] = useState("")

  const [showInput1, setShowInput1] = useState('')
  const [showInput2, setShowInput2] = useState('')
  const [showInput3, setShowInput3] = useState('')
  const [showInput4, setShowInput4] = useState('')
  const [showInput5, setShowInput5] = useState('')

  const [couse1, setCouse1] = useState('')
  const [couse2, setCouse2] = useState('')
  const [couse3, setCouse3] = useState('')
  const [couse4, setCouse4] = useState('')
  const [couse5, setCouse5] = useState('')


  const handleChange1 = (event) => {
    if (event.target.value > 1) {
      setShowInput1('show-input-comment')
      setCheck1(event.target.value)
    } else {
      setShowInput1('')
      setCheck1(event.target.value)
    }
  }
  const handleChange2 = (event) => {
    if (event.target.value > 1) {
      setShowInput2('show-input-comment')
      setCheck2(event.target.value)
    } else {
      setShowInput2('')
      setCheck2(event.target.value)
    }
  }
  const handleChange3 = (event) => {
    if (event.target.value > 1) {
      setShowInput3('show-input-comment')
      setCheck3(event.target.value)
    } else {
      setShowInput3('')
      setCheck3(event.target.value)
    }
  }
  const handleChange4 = (event) => {
    if (event.target.value > 1) {
      setShowInput4('show-input-comment')
      setCheck4(event.target.value)
    } else {
      setShowInput4('')
      setCheck4(event.target.value)
    }
  }
  const handleChange5 = (event) => {
    if (event.target.value > 1) {
      setShowInput5('show-input-comment')
      setCheck5(event.target.value)
    } else {
      setShowInput5('')
      setCheck5(event.target.value)
    }
  }


  const navigate = useNavigate();

  const clicked1 = () => {
    setConvert("2")
  }
  const clicked2 = () => {
    setConvert("3")
  }
  const clicked3 = () => {
    setConvert("4")
  }
  const clicked4 = () => {
    setConvert("5")
  }
  const clicked5 = () => {
    navigate("/3")
  }
  const backClicked1 = () => {
    navigate("/1")
  }
  const backClicked2 = () => {
    setConvert("1")
  }
  const backClicked3 = () => {
    setConvert("2")
  }
  const backClicked4 = () => {
    setConvert("3")
  }
  const backClicked5 = () => {
    setConvert("4")
  }

  useEffect(() => {
    const addressLink = window.location.href.split('/');
    const activation = addressLink[addressLink.length - 1];
    setLevels(activation)
  }, [])


  return (
    <>
      {
        convert === "1"
        &&
        <QuestionServey leveling={convert} number={1} question={"آیا از بخش فروش و پشتیبانی راضی بوده‌اید؟"} answer1={"بله خیلی"}
          answer2={"تا حدودی"} couse={(e)=>setCouse1(e.target.value)} showInput={showInput1} answer3={"نه زیاد"} answer4={"اصلا"} clicked={clicked1} backlink={backClicked1} btnText="بعدی" handleChange={handleChange1} checked={check1} />
      }
      {
        convert === "2"
        &&
        <QuestionServey leveling={convert} number={2} question={"آیا کار کردن با سایت برای شما راحت بوده است؟"} answer1={"بله خیلی"}
          answer2={"تا حدودی"} couse={(e)=>setCouse2(e.target.value)} showInput={showInput2} answer3={"نه زیاد"} answer4={"اصلا"} clicked={clicked2} backlink={backClicked2} btnText="بعدی" handleChange={handleChange2} checked={check2} />
      }
      {
        convert === "3"
        &&
        <QuestionServey leveling={convert} number={3} question={"آیا روند ارسال سریع و مفید بوده است؟"} answer1={"بله خیلی"}
          answer2={"تا حدودی"} couse={(e)=>setCouse3(e.target.value)} showInput={showInput3} answer3={"نه زیاد"} answer4={"اصلا"} clicked={clicked3} backlink={backClicked3} btnText="بعدی" handleChange={handleChange3} checked={check3} />
      }
      {
        convert === "4"
        &&
        <QuestionServey leveling={convert} number={4} question={"قیمت اجناس برای شما قابل قبول بوده است؟"} answer1={"بله خیلی"}
          answer2={"تا حدودی"} couse={(e)=>setCouse4(e.target.value)} showInput={showInput4} answer3={"نه زیاد"} answer4={"اصلا"} clicked={clicked4} backlink={backClicked4} btnText="بعدی" handleChange={handleChange4} checked={check4} />
      }
      {
        convert === "5"
        &&
        <QuestionServey leveling={convert} number={5} question={"به تجربه خرید خود چه شماره‌ای می دهید؟"} answer1={"خیلی خوب"}
          answer2={"تا حدودی"} couse={(e)=>setCouse5(e.target.value)} showInput={showInput5} answer3={"نه زیاد"} answer4={"اصلا"} clicked={clicked5} backlink={backClicked5} btnText="اتمام" handleChange={handleChange5} checked={check5} />
      }
    </>
  )
}
export default SecondServey