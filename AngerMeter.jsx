import { useState } from "react";

export default function AngerMeter(){
  const [anger,setAnger]=useState(100);

  return(
    <div className="card">
      <h2>How angry are you? 😭</h2>

      <input
        type="range"
        min="0"
        max="100"
        value={anger}
        onChange={(e)=>setAnger(e.target.value)}
      />

      <h3>
        {anger > 50 ? "😤" : "😊"}
      </h3>
    </div>
  )
}