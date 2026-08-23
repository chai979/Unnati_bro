import { motion } from "framer-motion";
import { useState } from "react";

export default function Welcome() {

  const [opened, setOpened] = useState(false);

  const handleClick = () => {

    setOpened(true);

    setTimeout(() => {

      const nextSection = document.getElementById("apology");

      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: "smooth"
        });
      }

    }, 1000);
  };

  return (

    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <motion.h1
        animate={{
          scale: [1, 1.2, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5
        }}
        style={{
          fontSize: "4rem"
        }}
      >
        🤝..
      </motion.h1>

      <h2>
        Hey...
        <br />
        This is for someone really special 🥺
      </h2>

      {!opened ? (

        <button onClick={handleClick}>
          Tap To Continue ❤️
        </button>

      ) : (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginTop: "20px" }}
        >

          <h3>
            Something special for you 💖
          </h3>

          

    <motion.p
  className="romantic-line"
  initial={{
    opacity: 0,
    y: 40,
    scale: 0.9
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1
  }}
  transition={{
    duration: 2,
    ease: "easeOut"
  }}
>
  <span className="glow-text">
    Please keep smiling... 🥹
  </span>

  <br /><br />

  because your smile has this beautiful way
  of making even bad days feel a little softer ❤️
</motion.p>



        </motion.div>

      )}

    </motion.div>
  );
}