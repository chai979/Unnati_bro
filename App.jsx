import { useState } from "react";

import Welcome from "./components/Welcome";
import ApologySection from "./components/ApologySection";
import BubbleSection from "./components/BubbleSection";
import MemoryGallery from "./components/MemoryGallery";
import MissYouSection from "./components/MissYouSection";
import AngerMeter from "./components/AngerMeter";
import SecondChance from "./components/SecondChance";
import ForgiveButtons from "./components/ForgiveButtons";
import FooterMessage from "./components/FooterMessage";

export default function App() {

  const [isUnlocked, setIsUnlocked] = useState(false);

  const [password, setPassword] = useState("");

  const correctPassword = "4252";

  const handleUnlock = () => {

    if (password === correctPassword) {

      setIsUnlocked(true);

    } else {

      alert("Wrong Password 😭");
    }
  };

  if (!isUnlocked) {

    return (

      <div className="app">

        <div className="card">

          <h1 style={{ fontSize: "3rem" }}>
            🔒
          </h1>

          <h2>
            Private Surprise For Someone Special ❤️
          </h2>

          <p style={{ marginTop: "15px" }}>
            Enter Password To Continue 🥺
          </p>
<input
  type="password"
  placeholder="Enter Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}

  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleUnlock();
    }
  }}

  style={{
    marginTop: "20px",
    padding: "14px",
    width: "100%",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    fontSize: "1rem"
    
  }}
/>

          <p
  style={{
    marginTop: "20px",
    opacity: 0.8,
    fontFamily: "cursive",
    fontSize: "0.7rem",
    color: "black"
  }}
>
Hint: My number's last 4 digits...
</p>

        </div>

      </div>
    );
  }

  return (

    <div className="app">

      <Welcome />

      <ApologySection />

      <BubbleSection />

      <MemoryGallery />

      <MissYouSection />

      <AngerMeter />

      <SecondChance />

      <ForgiveButtons />

      <FooterMessage/>

    </div>
  );
}