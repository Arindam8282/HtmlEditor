import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/')
  },[])//
  return ( <div>Page not found</div> );
}
 
export default NotFound;