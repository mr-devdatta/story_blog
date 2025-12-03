import React from "react";
import { useState } from "react";

export default function AboutUs() {

  const [msg, setMsg] = useState("");


  const callApi = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/hello/");
      const data = await response.json();
      setMsg(data.message);
    } catch (err) {
      setMsg("Error connecting to backend");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>React → Django API Test</h2>

      <button onClick={callApi}>
        Call Django API
      </button>

      <p>Response: {msg}</p>
    </div>
  );
 
}
