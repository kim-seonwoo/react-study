import { useState } from 'react';
import './components/RandomButton.scss';
const RandomButton = ({ todos, onRandom }) => {
  const [id, text, checked] = todos;
  const [randomNumber, setRandomNumber] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const [checkedTodo, setCheckedTodo] = useState([]);
  const onClick = () => {
    setRandomNumber(Math.floor(Math.random() * todos.length));
  };

  return (
    <div>
      <button className="randomButton" onClick={onClick}>
        랜덤 먹을거
      </button>
      <div>{todos[randomNumber].text}</div>
    </div>
  );
};

export default RandomButton;
