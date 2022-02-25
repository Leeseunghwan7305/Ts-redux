import React, { useReducer } from "react";

type Action = { type: "INCREMENT" } | { type: "DECREMENT" }; //이렇게 액션을 |으로 연달아서 나열
function reducer(state: number, action: Action): number {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      //아무것도 해당되지 않을 떄 기존 상태 반환
      return state;
  }
}
const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{count}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
