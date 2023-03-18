import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onCLickEnter = () => setMessage("안녕하세요!");
  const onCLickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onCLickEnter}>입장</button>
      <button onClick={onCLickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨강
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파랑
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록
      </button>
    </div>
  );
};

export default Say;
