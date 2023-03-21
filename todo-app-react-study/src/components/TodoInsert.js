import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
import { useCallback, useState } from 'react';
//react-icons를 이용하여 아이콘 끌어오기

//onInsert props에 대한 데이터를 가져온다.
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  //입략 값을 value로 전환하는 함수

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); //value값 초기화
      e.preventDefault(); //submit 새로고침을 방지
    },
    [onInsert, value],
  ); //onClick 대신 폼 전체에 onSubmit을 하면 엔터키 사용을 통해 제출 가능.
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
