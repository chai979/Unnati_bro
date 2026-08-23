import { useEffect, useState } from "react";

export default function FooterMessage() {

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {

      setShowMessage(true);

    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <footer
      style={{
        marginTop: "40px",
        paddingBottom: "20px",
        textAlign: "center"
      }}
    >

      {showMessage && (

        <p
          style={{
            color: "black",
            fontSize: "16px",
            fontWeight: "500"
          }}
        >

          If you really forgive me and decide to give this idiot one last chance... ❤️ then click a photo of this screen and send it to me ✨

        </p>

      )}

    </footer>
  );
}