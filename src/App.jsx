import React,{useState} from "react";
import Navbar from "./Components/Navbar.jsx";
const App = () => {
  const [inputBg, setInputBg] = useState(false);
  return (
    <main onClick={() => setInputBg(false)}>
      <Navbar input={inputBg} setInput={setInputBg}/>
    </main>
  );
};

export default App;
