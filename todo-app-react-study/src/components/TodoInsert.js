import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
//react-icons를 이용하여 아이콘 끌어오기

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력해주세요!" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
