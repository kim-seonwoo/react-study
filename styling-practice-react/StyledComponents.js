import styled, { css } from "styled-components";

const box = styled.div`
  bckground: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;

const button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
`;

const MyInput = styled("input")`
  background: "yellow";
`;
// 사용할 태그의 이름이 유동적이거나 컴포넌트 자체를 스타일링 해주고 싶을때,
// 태그의 타입을 styled함수의 인자로 전달

const MyLink = styled(Link)`
  background: "blue";
`;
