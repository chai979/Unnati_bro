import img1 from "../assets/Photo1.jpeg";
import img2 from "../assets/Photo2.jpeg";
import img3 from "../assets/Photo3.jpeg";
import img4 from "../assets/Photo4.png";

const memories = [
  {
    img: img1,
    caption: "Your smile >>> ❤️"
  },
  {
    img: img2,
    caption: "Pretty as always ✨"
  },
  {
    img: img3,
    caption: "Cutiee 🌸..."
  },
  {
    img: img4,
    caption: "You look good without even trying honestly ✨"
  }
];

export default function MemoryGallery() {
  return (
    <div className="card">
      <h2>Your Beautiful Pics 📷</h2>

      <div className="gallery">
        {memories.map((m, index) => (
          <div className="photo" key={index}>
            <img src={m.img} alt="" />
            <p>{m.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
