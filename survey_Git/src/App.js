import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Component/Header/Header';
import { MyContext } from './Component/ContextApi/ContexApi';
import { useEffect, useState } from 'react';
import SecondServey from './Component/surveyCo/QuestionsPage/SecondServey';
import FirstSurvey from './Component/surveyCo/FirstPage/FirstSurvey';
import ThirdServey from './Component/surveyCo/ThirdPage/ThirdServey';
import QuestionServey from './Component/surveyCo/QuestionsPage/QuestionServey';



function App() {

  const [levels, setLevels] = useState('1');

  const navigate = useNavigate()

  useEffect(() => {

    navigate('/1')

  }, [])

  return (


    <div className="App">
      <div className='survey-main-app'>
        <MyContext.Provider value={{ levels, setLevels }} >
          <Header />

          <Routes>
            <Route path='/1' element={<FirstSurvey />} />
            <Route path='/2' element={<SecondServey />} />
            <Route path='/3' element={<ThirdServey />} />
          </Routes>
        </MyContext.Provider>
      </div>



    </div>



  );


}

export default App;
