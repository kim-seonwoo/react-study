import { useState } from 'react';
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
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
