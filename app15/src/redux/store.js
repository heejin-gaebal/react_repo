import { combineReducers, createStore } from 'redux';

const initialState = { cnt: 0 }; //키:값

//리듀서의 파라미터에 기본값 부여
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'plus':
      return { ...state, cnt: state.cnt + 1 };
    case 'minus':
      return { ...state, cnt: state.cnt - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  //reducer들을 한꺼번에 묶어줌
  c: counterReducer,
});

const rootStore = createStore(rootReducer);

export default rootStore;
