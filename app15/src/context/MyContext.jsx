import { createContext, useContext, useReducer, useState } from 'react';

//컴포넌트형태로 만들 컨텍스트 생성
const MyContext = createContext();

//컴포넌트의 파라미터에 속성을 넣어준다
//props는 MyContextProvider호출하는곳에서 속성값이 정해져서 객체가 전달됨
//props로 전달한게 아무것도없는데 어떻게 사용할 수 있냐면..
//컴포넌트 간의 데이터 전달 통로로 자동으로 children에 담김
//props로 정의해주지않으면 children을 찾아갈 수 없음
const MyContextProvider = (props) => {
  //MyContext.Provider라는 전역공간에 쓸 value값을 useState로 정하고 넣어주기
  // const [num, setNum] = useState(0); //객체를 배열로 생성

  // reducer 사용 => useState()는 [state, setter] 누군가 setter를 함부로 쓸 수있으므로, 변경못하게 reducer사용
  const initialState = { cnt: 0 };
  const reducer = (state, action) => {
    //action에는 type : plus , payload : n값
    //dispatch를 통해 어떤 action(동작)객체가 들어오면 state를 바꿔줄 reducer를 설정!
    switch (action.type) {
      case 'plusOne':
        return { ...state, cnt: state.cnt + 1 }; //기존 값을 살리고 작동이 되게해야되므로 ...state를 넣어준다
      case 'minusOne':
        return { ...state, cnt: state.cnt - 1 };
      case 'plus':
        return { ...state, cnt: state.cnt + action.data };
      case 'minus':
        return { ...state, cnt: state.cnt - action.data };
      default:
        return state;
      //기본값 유지시키기
    }
    return;
    //return으로 state값 변경
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //전역 저장공간 MyContext.Provider에 해당 reducer의 배열의 객체를 넣어준다

  return (
    // 배열을 객체로 담는다 :마구잡이로 담고 꺼내기 위해서
    <MyContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MyContext.Provider>
  );
  //적용이 될 자식 컴포넌트를 넣어준다
};

const useMyContext = () => {
  return useContext(MyContext);
  //context의 value | MyContext를 context로 사용하겠다
  //MyContext를 useMyContext에 담아서 전달하는 이유 : 템플릿을 정해주는 역할 | 데이터 정합성을 유지하기 위해!
  //MyContext를 그냥 전달하게되면 MyContextProvider에 접근해서 value값을 마음대로 사용하게되면 안되므로 제한을 해서 템플릿을 만들어줌
};

export { MyContextProvider, useMyContext };
