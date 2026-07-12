import { useState, useEffect } from "react";
import register1 from '../assets/register1.jpg';
import register2 from '../assets/register2.jpg';
// import register3 from '../assets/register3.jpg';
import register4 from '../assets/register4.jpg';
import register5 from '../assets/register5.jpg';
import logo from '../assets/logo.png'
const images = [
  { 
    title: "Connect with People Who Matter",
    url: register1,
    desc: 'Build meaningful friendships, discover new communities, and stay connected wherever you are.'
  },
  { 
    title: "Engage with Your Community",
    url: register2,
    desc: 'Like, comment, and interact with content from people who share your interests.'
  },
  { 
    title: "Discover New Communities",
    url: register4,
    desc: "Explore trending topics, follow inspiring creators, and find content you'll love."
  },
  { 
    title: "Your Privacy Comes First",
    url: register5,
    desc: 'We protect your data with secure authentication and privacy-focused features so you can connect with confidence.'
  },
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div
      style={{ backgroundImage: `url(${images[current].url})` }}
      className="relative bg-cover bg-center bg-no-repeat w-96 h-[38rem] mx-auto flex flex-col justify-between p-6 text-white rounded-l-3xl shadow-lg transition-all duration-700 ease-in-out overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <img className="w-40 -mt-10 -ml-7" src={logo} alt="Connectify "></img>
        </div>

        <div className="space-y-3">
          <div className="text-center mx-auto max-w-xs">
            <h3 className="text-lg font-semibold mb-2">{images[current].title}</h3>
            <p className="text-xs opacity-80">{images[current].desc}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
