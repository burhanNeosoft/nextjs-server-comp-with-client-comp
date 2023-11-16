"use client";
import { useState } from "react";
import ServerCompo from "./ServerCompo";
const ClinetCompo = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Client compo</h1>
      <span>Interaction : {count}</span>
      {children}
      <button onClick={increment}>+ Add</button>
    </>
  );
};

export default ClinetCompo;
