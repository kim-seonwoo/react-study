import { useState } from 'react';
import './RandomButton.scss';
const RandomButton = ({ todos, onRandom }) => {
  const [randomNumber, setRandomNumber] = useState(0);
  const onClick = () => {
    setRandomNumber(Math.floor(Math.random() * todos.length));
  };

  return (
    <div>
      <button className="randomButton" onClick={onClick}>
        Random Menu
      </button>
      <div className="randomText">{`오늘 식사는 ${todos[randomNumber].text}입니다.`}</div>
    </div>
  );
};

export default RandomButton;
