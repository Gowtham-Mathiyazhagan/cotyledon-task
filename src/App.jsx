import React,{useState} from "react";
import Navbar from "./Components/Navbar.jsx";
import Coupon from "./Components/Coupon.jsx";
import Carousel from "./Components/Carousel.jsx";
import Category from "./Components/Category.jsx";
import Footer from "./Components/Footer.jsx";
const App = () => {
  const [inputBg, setInputBg] = useState(false);
  return (
    <main onClick={() => setInputBg(false)}>
      <Navbar input={inputBg} setInput={setInputBg}/>
      <Coupon/>
      <Carousel/>
      <Category/>
      <Footer/>
    </main>
  );
};

export default App;
