import { createContext } from 'react';

const StrContext = createContext(); //문자열context
const NumContext = createContext(); //숫자context

const StrContextProvider = () => {
  return <StrContext.Provider value={kuromi}></StrContext.Provider>;
};

const NumContextProvider = () => {
  return <NumContext.Provider value={123}></NumContext.Provider>;
};

export { StrContextProvider, NumContextProvider };
