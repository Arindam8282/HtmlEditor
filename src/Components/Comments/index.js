import React, { useState } from 'react';

const Comments = () => {
  const [comments,setComments] = useState([])
  return ( <>
  comments
  {
    comments?.map((comment)=><div>{comment}</div>)
  }
  </> );
}
 
export default Comments;