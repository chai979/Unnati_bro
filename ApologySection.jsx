import { TypeAnimation } from "react-type-animation";

export default function ApologySection() {

  return (

    <div className="card" id="apology">

      <h2>My Apology 😶‍🌫️</h2>

      <TypeAnimation
        sequence={[
          "I know I hurt you... and honestly, I feel terrible about it. I acted stupidly 😔 You mean so much to me ❤️",
          1000
        ]}
        speed={50}
        repeat={0}
      />

    </div>
  );
}