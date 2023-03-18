import { useState } from "react";

const InterationSample = () => {
  const [names, setNames] = useState([
    { text: "딸기", id: 1 },
    { text: "당근", id: 2 },
    { text: "수박", id: 3 },
    { text: "참외", id: 4 },
    { text: "메론", id: 5 },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(6);
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((fruit) => (
    <li key={fruit.id} onDoubleClick={() => onRemove(fruit.id)}>
      {fruit.text}
    </li>
  ));
  return (
    <div>
      <input value={inputText} onChange={onchange} />
      <button onClick={onclick}>Add</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default InterationSample;
