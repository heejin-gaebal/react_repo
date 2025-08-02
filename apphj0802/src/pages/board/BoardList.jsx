import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100vw; height: 100vh;
  padding: 5%;   background: linear-gradient(#f6fcfd, #d7f5fd);

  & > .wrap{
    width: 100%;
    min-height: 500px;
    border: 5px solid #fff;
    padding: 50px;

    & > h1 {
      font-size: 80px;color: #0788d3;
      display: flex; justify-content: center;
      text-shadow: 6px 5px 11px #A7EEFF;
      border-bottom: 3px dotted #0788d3;
    }

    table{
      width: 100%;
      border-top: 2px solid #0788d3;
      border-bottom: 1px solid #A7EEFF;
      background: #fff;
      margin-bottom: 50px;

        & > thead{border-bottom: 1px solid #0788d3;}
        & > tbody tr:hover{background: #cef1fa;}
        & th{border-bottom: 1px solid #0788d3;}
          & th,td{
              height: 40px;
              text-align: center;

              & input, textarea{
                  width: -webkit-fill-available;
                  height: -webkit-fill-available;
              }
          }
        
    }
    .btnWrap{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
        button{
          height: 50px;
          background: #25c3eb;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          color: #fff;
          padding: 0 15px;
          display: flex;
          justify-self: right;
          align-items: center;
        }
      .home{
        background: #fff;
        border: 1px solid #25c3eb;
        border-radius: 5px;
        font-size: 16px;
        color: #25c3eb;
        text-decoration: none;
        padding: 14px;
      }
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  .modal-content {
    background: white;
    padding: 30px; border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    width: 500px;

    & h2 {margin-bottom: 30px;}

    & div{
      & p {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          text-align: center;

          & strong{min-width:100px}
      }
      margin-bottom: 50px;
    }
    button{
      height: 50px;
      background: #d1d1d1;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      color: #000;
      padding: 0 15px;
      display: flex;
      justify-self: right;
      align-items: center;
    }
  }

`;

const BoardList = () => {
  const [localList, setLocalList] = useState([]);

  //팝업에 정보담기
  const [selectList, setSelectList] = useState();

  function loadList(){
    const str = localStorage.getItem("voList");
    setLocalList(JSON.parse(str));
  }

  //팝업
  function handlePopOpen(list){
      setSelectList(list);
  }
  function handlePopClose(){
      setSelectList(null);
  }

  return (
    <Layout>
      <div className='wrap'>
        <h1>My Wish List</h1>
        <div className="btnWrap">
          <Link className='home' to="/">Home 🏡</Link>
          <button onClick={loadList}>내 위시리스트 🔎</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>가고싶은 도시</th>
              <th>여행 목적</th>
            </tr>
          </thead>
          <tbody>
            {localList.map((list, idx)=>{
              return(
                <tr key={idx} onClick={()=>handlePopOpen(list)}>
                  <td>{list.city}</td>
                  <td>{list.reason}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {selectList && (
        <div className="modal-overlay" onClick={handlePopClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>📍 Travel Wish</h2>
            <div>
              <p><strong>도시</strong>{selectList.city}</p>
              <p><strong>여행 목적</strong>{selectList.reason}</p>
            </div>
            <button onClick={handlePopClose}>닫기 ❌</button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default BoardList;
