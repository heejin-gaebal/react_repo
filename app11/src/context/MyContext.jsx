import { createContext, useContext, useState } from 'react';

const StrContext = createContext(); //문자열context
const NumContext = createContext(); //숫자context

const StrContextProvider = ({ children }) => {
  const [str, setStr] = useState('꾸로미');
  return (
    <StrContext.Provider value={[str, setStr]}>{children}</StrContext.Provider>
  );
};

const NumContextProvider = ({ children }) => {
  const [num, setNum] = useState(123);
  const plus = () => {
    setNum(num + 1);
  };
  const minus = () => {
    setNum(num - 1);
  };

  const v = { num, plus, minus };
  return <NumContext.Provider value={v}>{children}</NumContext.Provider>;
};

const useStrContenxt = () => {
  return useContext(StrContext);
};

const useNumContext = () => {
  return useContext(NumContext);
};

export {
  StrContextProvider,
  NumContextProvider,
  useStrContenxt,
  useNumContext,
};
