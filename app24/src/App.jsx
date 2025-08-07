import { useState } from 'react';
import './App.css';
import AwesomeButton from './components/AwesomeButton';
import MainLayout from './layouts/MainLayout';

function App() {
  const [result, setResult] = useState('');

  function setTeto() {
    setResult('당신은 테토녀입니다 💄');
  }
  function setEgen() {
    setResult('당신은 에겐녀입니다 🎀');
  }

  return (
    <>
      <MainLayout>
        <div>
          <h1>스트레스 받으면 엽떡을 즐긴다</h1>
          <AwesomeButton str={'그렇다'} f={setTeto} />
          <AwesomeButton str={'아니다'} f={setEgen} />
          {/* AwesomeButton은 컴포넌트고 진짜 버튼X */}
          <h1>{result}</h1>
        </div>
      </MainLayout>
    </>
  );
}

export default App;
