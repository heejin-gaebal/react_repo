import './App.css';
import styled from 'styled-components';
import Test01 from './components/Test01';
import Test02 from './components/Test02';
import Test03 from './components/Test03';
import MyBtn from './components/MyBtn';
import MyTypo from './styles/MyTypho';
import MyPinkTextBtn from './components/MyPinkTextBtn';
import MyFlexDiv from './styles/MyFlexDiv';
import MyGridDiv from './styles/MyGridDiv';
import Test04 from './components/Test04';

const Layout = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Layout>
      {/* <Test01 />
      <Test02 />
      <Test03 /> */}
      {/* <MyBtn>
        <MyTypo>내 버튼이양</MyTypo>
      </MyBtn>
      <hr />
      <MyPinkTextBtn>Button+Text Style</MyPinkTextBtn>
      <hr />
      <MyFlexDiv>
        <h1>
          <MyPinkTextBtn>Flex 적용1</MyPinkTextBtn>
        </h1>
        <h1>
          <MyPinkTextBtn>Flex 적용2</MyPinkTextBtn>
        </h1>
        <h1>
          <MyPinkTextBtn>Flex 적용3</MyPinkTextBtn>
        </h1>
      </MyFlexDiv>
      <hr />
      <MyGridDiv r={4} c={1}>
        <h1>테스트01</h1>
        <h1>테스트02</h1>
        <h1>테스트03</h1>
        <h1>테스트04</h1>
      </MyGridDiv>
      <hr />
      <MyGridDiv r={1} c={4}>
        <h1>테스트01</h1>
        <h1>테스트02</h1>
        <h1>테스트03</h1>
        <h1>테스트04</h1>
      </MyGridDiv> */}
      <Test04 />
    </Layout>
  );
}

export default App;
