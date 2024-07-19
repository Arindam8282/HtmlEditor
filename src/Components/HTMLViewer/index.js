// src/Viewer.js
import React, { useEffect, useState } from 'react';
// import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css'; // import styles

const Viewer = ({ value, onChange }) => {
    const [viewer,setViwer] = useState(()=>{
        let tempDiv = document.createElement('div');
 
         // Set the innerHTML of the temporary element to the text
         tempDiv.innerHTML = value.toString();
 
         // Get the actual HTML content from the temporary element
         let htmlContent = tempDiv.innerText;
         return htmlContent
    })
    useEffect(()=>{
         // The text to be converted

         // Create a temporary element
         let tempDiv = document.createElement('div');
 
         // Set the innerHTML of the temporary element to the text
         tempDiv.innerHTML = value.toString();
 
         // Get the actual HTML content from the temporary element
         let htmlContent = tempDiv.innerText;
         setViwer(htmlContent)
         console.log("value",htmlContent,value);

    },[value])
  return (
  <div >
      <div dangerouslySetInnerHTML={{ __html:  viewer }} />
  </div>
  );
};

export default Viewer;
