import React, { useContext } from 'react';
import "./Header.css";
import { MyContext } from '../ContextApi/ContexApi';
import { IoIosCheckmarkCircleOutline, IoIosCheckmarkCircle } from "react-icons/io";


function Header() {

    const { levels, setLevels } = useContext(MyContext);
    console.log(levels)

    return (


        <div className='levels'>


            <div className={`main-level ${levels >= 3 ? "activation" : null}`}>
                <span style={{ borderRadius: "50%" , display : 'flex' , justifyContent : 'center' , alignItems : 'center' }}>
                    {levels >= 3 ? <IoIosCheckmarkCircleOutline size={35} /> : <span>3</span>}
                </span>
            </div>
            <div className={`line-level ${levels >= 3 ? "activation" : null}`}></div>
            <div className={`main-level ${levels >= 2 ? "activation" : null}`}>
                <span style={{ borderRadius: "50%" , display : 'flex' , justifyContent : 'center' , alignItems : 'center'  }}>
                    {levels >= 2 ? <IoIosCheckmarkCircleOutline size={35} /> : <span>2</span>}
                </span>
            </div>
            <div className={`line-level ${levels >= 2 ? "activation" : null}`}> </div>
            <div className={`main-level ${levels >= 1 ? "activation" : null}`}>
                <span style={{ borderRadius: "50%" , display : 'flex' , justifyContent : 'center' , alignItems : 'center'  }}>
                    {levels >= 1 ? <IoIosCheckmarkCircleOutline size={35} /> : <span>1</span>}
                </span>
            </div>


        </div>



    )
}

export default Header