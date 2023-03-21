import { useCallback, useState, useRef } from 'react';
import RandomButton from './components/RandomButton';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 0; i < 250; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// lag을 일으키게 하려고 추가한 함수
const App = () => {
  //todos를 통해 기본적으로 쓰일 객체의 폼을 구성합니다.
  //createBulkTodos를 useState안에
  const [todos, setTodos] = useState(createBulkTodos);

  //고유값으로 사용될 id

  const nextId = useRef(4); //2501
  //Input영역의 값을 반영하는 onInsert 함수입니다. useRef를 이용하여 다음 값을 id로, text를 반영합니다.
  //이 todo 값을 기존의 todos와 concat합니다. 마지막엔 nextId.current의 값을 1 증가 시킵니다.
  //todos변화 감지에만 렌더링 됩니다.

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  // id를 입력 받아 특정 id 객체가 없는 새로운 배열을 반환합니다.

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id)); //제거 필터 할때 전형적인 수법.
    },
    [todos],
  );

  //특정 id 값이 선택되고 todo에 있는 id명이라면. checked의 값을 반대로 반환합니다.
  //그렇지 않으면 그대로 반영합니다.
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      <RandomButton todos={todos} />
    </TodoTemplate>
  );
};

export default App;
