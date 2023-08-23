import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tours from "./projects/project-2-tours/Tours";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tours />
    </>
  );
}

export default App;
