import { styled } from '@mui/material/styles';
import { use, useEffect, useState } from 'react';
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
  }

  table {
    width: 100%;
  }
`;
const NoticeList = () => {
  const url = 'http://127.0.0.1:8080/api/notice';
  const option = {};
  const initState = [];
  const { data: voList, isLoading } = useFetch(url, option, initState);

  return (
    <StyledDiv>
      <h1>Notice 공지</h1>
      {isLoading === true ? (
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

      <Link to={'/notice/insert'}>공지사항 등록</Link>
    </StyledDiv>
  );
};

export default NoticeList;
