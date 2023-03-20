import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
import { useCallback, useState } from 'react';
//react-icons를 이용하여 아이콘 끌어오기

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); //value값 초기화
      e.preventDefault(); //submit 새로고침을 방지
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="먹고 싶은 것을 입력해주세요!"
        onChange={onChange}
        value={value}
      />

      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
