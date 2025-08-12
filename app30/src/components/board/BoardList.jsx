import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const StyledDiv = styled('div')`
  width: 80%;
  height: auto;
  background-color: #fff;
  border: 3px solid #000;
  color: inherit;

  h1 {
    text-align: center;
  }

  & .jelly-box {
    background: #b3f9bc;
    margin: auto;
  }

  table {
    width: 100%;
  }
`;

const BoardList = () => {
  // const [isLoading, setIsLoading] = useState();
  // const [voList, setVoList] = useState([]);

  // useEffect(() => {
  //   let isMounted = true;
  //   setIsLoading(true);
  //   const url = 'http://127.0.0.1:8080/api/board';
  //   const option = {};
  //   fetch(url, option)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       //컴포넌트가 살아있으면 실행
  //       if (isMounted) {
  //         setVoList(data);
  //       }
  //     })
  //     .finally(() => {
  //       if (isMounted) {
  //         setIsLoading(false);
  //       }
  //     });
  //   //클립업 함수
  //   return () => {
  //     //컴포넌트가 죽었으면 실행
  //     isMounted = false;
  //   };
  // }, []);

  const url = 'http://127.0.0.1:8080/api/board';
  const option = {};
  const initState = []; //list페이지이므로 기본값 배열 부여
  const { data: voList, isLoading } = useFetch(url, option, initState);
  //data: voList - data의 별칭 부여
  return (
    <StyledDiv>
      <h1>Board 게시판</h1>
      {isLoading ? (
        <div>
          <div className="jelly-box"></div>
          <div className="jelly-box-shadow"></div>
        </div>
      ) : (
        <table border={1}>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Hit</th>
            </tr>
          </thead>
          <tbody>
            {voList.map((vo, idx) => {
              return (
                <tr>
                  <td>{vo.no}</td>
                  <td>{vo.title}</td>
                  <td>{vo.hit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <Link to={'/board/insert'}>게시글 등록</Link>
    </StyledDiv>
  );
};

export default BoardList;
