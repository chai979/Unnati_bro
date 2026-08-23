import { useState } from "react";
import Confetti from "react-confetti";

export default function ForgiveButtons(){

  const [forgiven,setForgiven]=useState(false);

  const [position,setPosition]=useState({
    x:0,
    y:0
  });

  const moveButton=()=>{
    setPosition({
      x:Math.random()*200-100,
      y:Math.random()*100-50
    })
  };

  return(
    <div className="card" style={{position:"relative"}}>

      {forgiven && <Confetti />}

      <h2>Final Decision 🎉</h2>

      {!forgiven ? (
        <>
          <button onClick={()=>setForgiven(true)}>
            Forgive This Idiot 😭
          </button>

          <button
            onMouseEnter={moveButton}
            style={{
              position:"relative",
              left:position.x,
              top:position.y,
              marginLeft:"20px"
            }}
          >
            Still Angry 😤
          </button>
        </>
      ) : (
       <h1 >
  THANK YOU 🥹✨
      </h1>
      )}

    </div>
  )
}