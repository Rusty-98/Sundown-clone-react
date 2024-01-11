// Loader.js
import { useEffect, useState } from "react";
import './Loader.css'; // Import your CSS file

const Loader = () => {
  const [cont, setCont] = useState("Environment");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCont("Content");
    }, 800);
    setTimeout(() => {
      setCont("Experience");
    }, 1600);
    setTimeout(() => {
      setLoad(false);
    }, 2700);
  }, []);

  return (
    <div className={`bg-black h-screen relative flex items-center justify-center text-[6vw] w-full ${load ? 'top-0 transi' : 'top-[-100%]'}`}>
      <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-red-500 to-orange-500">{cont}</h1>
    </div>

  );
};

export default Loader;
