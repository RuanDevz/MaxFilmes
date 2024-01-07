// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Mylist.css';

const Mylist = () => {

const [movie, setMovie] = useState([])

useEffect(() =>{
  fetch('')
  .then(resp => resp.json())
  .then(data => console.log(data))
}, [])
  
  return (
<div>

</div>

  );
};

export default Mylist;
