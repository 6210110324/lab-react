import React, { useState } from 'react';
import './App.css';


const an=()=>{
  return {x:0};
}
const word = "Hello";
function App() {
  const [state, setState] = useState(an())
  const z=state.x==1? "Genius!":state.x==2?"Oops! you wrong.":""
  const check=value=>{
    setState({x:1})
  }
  const f=()=>{
    setState({x:2})
  }
  return (
    <div>
    <br></br>
       <center><div>รูปภาพนี้มาจากซีรี่ย์เรื่องใด?</div></center><br></br>
      <center><img src ="https://themomentum.co/wp-content/uploads/2018/11/TheMO-GOTseason8_cover-960x720.jpg" width="280px" height="350px"/></center>
      <center><div className="card" onClick={f}>The 100</div></center>
      <center><div className="card" onClick={f}>Teen wolf</div></center>
      <center><div className="card" onClick={f}>The Witcher</div></center>
      <center><div className="card" onClick={check}>Game of Thrones</div></center><br></br>
      <center><div className="card activeCard">{z}</div></center>
    </div>
    );
   
}


export default App;
