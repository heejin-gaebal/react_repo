import { createContext, useContext, useReducer } from 'react';

const MyContext = createContext();

//공간과 값을 한꺼번에 생성해주고 화살표함수만들어서 return해준다
//자식도 구조분해할당형식으로 파라미터에 넣어준다
const MyContextProvider = ({ children }) => {
  //reducer 사용
  const initialState = { num: 50 };
  const reducer = (state, action) => {
    // state(기존값)값을 뭐로 바꿀지 / action에는 어떤 객체가 전달됨
    // state 안에는 객체가 들어있음 (num)
    switch (action.type) {
      case 'plus':
        return { ...state, num: state.num + 1 };
      //state의 객체들을 객체로 반환해야하니 state 값들을 스프레드형식으로 가져와서 {객체}에 담아줌
      case 'minus':
        return { ...state, num: state.num - 1 };
      case 'reset':
        return { ...state, num: 0 };
      default:
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    //value에 객체를 담아줘야하므로 {}에 값을 넣는다
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

//f01함수에서 MyContext를 사용하겟다
const useMyContext = () => {
  return useContext(MyContext); //React Hook
  //customHook 사용시 use- 라고 접두사를 붙여야함
};

export { MyContext, MyContextProvider, useMyContext };
