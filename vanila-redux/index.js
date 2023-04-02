import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btndecrease = document.querySelector("#decease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
//액션: 프로젝트 상태에 변화를 일으키는 것, 대문자로 작성
const toggleSwitch = () => ({ type: TO });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });
//액션 객체를 만드는 액션 생성함수. 액션 객체는 type을 가지고 있어야함

const initialState = {
  toggle: false,
  couner: 0,
};

//초깃값

//리듀서 함수: 변화를 일으키는 함수
//state의 디폴트 값, 액션을 받아와 객체를 변환, 불변성 유지
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState(); //현재 상태를 불러옴
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter;
};

render();
store.subscribe(render);

//dispatch: 액션을 발생시키는 것

divToggle.onClick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onClick = () => {
  store.dispatch(increase(1));
};

btndecrease.onClick = () => {
  store.dispatch(decrease());
};
