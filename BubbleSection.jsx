import { useState } from "react";

const messages = [
  "Sorry 🥺",
  "I Miss You 💔",
  "You Matter To Me 🌸",
  "Please Forgive Me 🙏",
  "Your Smile > Everything 💖",
  "Can We Talk Again? 🥹"
];

export default function BubbleSection() {

  const [bubbles, setBubbles] = useState([]);

  const createBubble = () => {

    const id = Date.now();

    const newBubble = {
      id,
      text: messages[Math.floor(Math.random() * messages.length)],
      left: Math.random() * 80
    };

    setBubbles((prev) => [...prev, newBubble]);

    // Auto remove after 5 sec
    setTimeout(() => {

      setBubbles((prev) =>
        prev.filter((bubble) => bubble.id !== id)
      );

    }, 5000);
  };

  const removeBubble = (id) => {

    setBubbles((prev) =>
      prev.filter((bubble) => bubble.id !== id)
    );
  };

  return (

    <div className="card bubble-area">

      <h2>Floating Feelings 🫧</h2>

      <button onClick={createBubble}>
        Tap Here ❤️
      </button>

      {bubbles.map((bubble) => (

        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            bottom: "0px"
          }}
          onClick={() => removeBubble(bubble.id)}
        >
          {bubble.text}
        </div>

      ))}

    </div>
  );
}