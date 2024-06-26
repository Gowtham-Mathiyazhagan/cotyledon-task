import React,{useState} from "react";
import Navbar from "./Components/Navbar.jsx";
import Coupon from "./Components/Coupon.jsx";
import Carousel from "./Components/Carousel.jsx";
const App = () => {
  const [inputBg, setInputBg] = useState(false);
  return (
    <main onClick={() => setInputBg(false)}>
      <Navbar input={inputBg} setInput={setInputBg}/>
      <Coupon/>
      <Carousel/>
    </main>
  );
};

export default App;
