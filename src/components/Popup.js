import React from 'react'
import '../components/Popup.css'
// import coin2 from '../Images/coin2.jpeg'
import cbeams from "../Images/cbeams.png"
import {BiPlus} from 'react-icons/bi'
import {MdOutlineExposureZero} from "react-icons/md"


const Popup = (props) => {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
        <header>
        <div className='header-text'>
        <div>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        </div>
        
        <div>
        <p>Awards</p>
        </div>
      
        </div>
      
      <div className='head-icon'>
        <p>
        <div className='coin-flex'>
        <div className='img-0'>
        <img width='25px' src={cbeams} alt="coin" />
       {/* <p>0</p> */}
       <MdOutlineExposureZero size='30px' />
        </div>
        
       
       
        <div className='p-head'><BiPlus size='25px' /></div>
        </div>

        </p>
      </div>
     </header>
            <hr />
            {props.children}
        </div>

    </div>
  ) : "";
}

export default Popup