import React from 'react';
import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import localstorage from '../../Controllers/Localstorage';
const DashBoard = () => {
  const navigate = useNavigate();
  const createTemplate = (e)=>{
    e.preventDefault();
    navigate('template/create');
  }
  const logOut = ()=>{
    localstorage.logOut()
    window.location.reload()
  }
  return ( <div>Dashboard
    <button onClick={logOut}>
      logOut
    </button>
    <div style={{display:'flex',gap:'10px', justifyContent:' center'}}>
      <button className="btn" onClick={createTemplate}><i className="fa fa-plus"></i></button>
      <div className='card'>

      </div>

    </div>
    

  </div> );
}
 
export default DashBoard;