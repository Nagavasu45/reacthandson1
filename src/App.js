
import { useState } from 'react';
import './App.css';
import Ffun1 from './file1/one';
import Ffun3 from './file1/three';
import Ffun2 from './file1/two';
import "./file1/main.css"


function App() {
  const [count1,setCount1]=useState(false)
  const [count2,setCount2]=useState(false)
  return (
    
    <div className="App" >
      
      <Ffun1 />
      
      <button onClick={()=>setCount1(!count1)}>
        To see styling in functional component
      </button>
      
      <button onClick={()=>setCount2(!count2)}>
        To see styling in class component
      </button>
      <div className='sty3'>
      <div className='sty4'>
      {count1 ? <Ffun2 /> : ""}</div>
      <div className='sty5'>
      {count2 ? <Ffun3 /> : ""}</div>
      </div>
      
      
    </div>
  );
}

export default App;
