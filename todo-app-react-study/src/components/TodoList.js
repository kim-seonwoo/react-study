import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
      {/* todos를 app에서 props로 받아서 그만큼 map으로 생성해준다. */}
    </div>
  );
};

export default TodoList;
