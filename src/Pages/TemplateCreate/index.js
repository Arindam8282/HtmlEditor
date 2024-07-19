import React, { useState } from 'react';
import QuillEditor from '../../Components/QuillEditor';
import Comments from '../../Components/Comments';
import Viewer from '../../Components/HTMLViewer';
import { useNavigate } from 'react-router-dom';
import Reviewers from '../../Components/Reviewers';

const TemplateCreate = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const close = ()=>{
    navigate('/')
  }

  return ( <div style={{display:'flex',justifyContent:'space-between'}}>
      <div style={{width:'50%'}}>
        <input style={{fontSize:'50px',height:'50px',width:'350px'}} placeholder='type file name'  type='text' />
        <button style={{fontSize:'30px',padding:'10px'}}>Save</button>
        <button onClick={close} style={{fontSize:'30px',padding:'10px'}}>Cancel</button>

        <QuillEditor value={content} onChange={setContent} />
        <h2>Content Preview:</h2>
        <Viewer value={content} onChange={setContent}  />
      </div>
      <div style={{width:'50%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Reviewers />
        <Comments />
      </div>
  </div> );
}
 
export default TemplateCreate;