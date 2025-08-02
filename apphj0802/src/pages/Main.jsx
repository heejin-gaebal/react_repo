import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100vw; height: 100vh;
  padding: 10%;   background: linear-gradient(#A7EEFF, #FFD2FF, #FFD9E4);

  & > .wrap{
    width: 100%;
    min-height: 500px;
    border: 5px solid #fff;
    padding: 50px;

    & > h1 {
      font-size: 80px;color: #6c2ca5;
      display: flex; justify-content: center;
      text-shadow: 6px 5px 11px #c098e3;
      margin-bottom: 100px;
    }
    & > .boardLink{
      display: flex; justify-content: center;
      text-decoration: none;
      color: #e41cb2; font-weight: 600;
      font-size: 50px;
      transition: ease-in-out 0.2s;
      border: 2px solid #ffc3f0;
      border-radius: 10px;
      padding: 10px;
      &.list{
        color: #0788d3;
        border: 2px solid #b3dcf3;
      }
      
      &:hover{
        border: 2px solid #fff;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

const Main = () => {
  return (
    <>
      <Layout>
        <div className='wrap'>
          <h1>✈️Travel Wish✈️</h1>
          <Link className='boardLink' to="/board/insert">My Wish Insert 📑</Link><br />
          <Link className='boardLink list' to="/board/list">My Wish List 🔎</Link>
        </div>
      </Layout>
    </>
  );
};

export default Main;
