import { useCallback, useState, useRef } from 'react';
import RandomButton from './components/RandomButton';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '처음텍스트',
      checked: true,
    },
    {
      id: 2,
      text: '둘째텍스트',
      checked: true,
    },
    {
      id: 3,
      text: '셋째텍스트',
      checked: false,
    },
  ]);
  //고유값으로 사용될 id

  const nextId = useRef(4);

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
  // ref를 사용하여 변수 담기

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id)); //제거 필터 할때 전형적인 수법.
    },
    [todos],
  );

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
