"use client";
import { useState, useEffect, useRef } from "react";
const Dashboard = () => {
  const [name, setName] = useState("Hello world");
  const textRef = useRef(null);

  useEffect(() => {
    //setName("John Doe");
    if (textRef) {
      textRef.current.style.background = "red";
    }
  }, []);

  const changeName = () => {
    setName("John Doe");
    if (textRef) {
      textRef.current.style.background = "green";
    }
  };
  return (
    <>
      <h1 ref={textRef}>{name}</h1>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};

export default Dashboard;
