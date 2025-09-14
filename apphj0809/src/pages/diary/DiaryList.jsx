import { useState } from "react";
import { useEffect } from 'react';
import React from "react";
import MyBtn from "../../components/common/MyBtn";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledDiary = styled('div')`
  width: 80%; padding: 20px;
  border: 3px solid #b9b0da;
  border-radius: 10px; 
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  text-align: center;
  
  & h1{
    margin-top: 0;
    margin-bottom: 50px;
  }

  & table{
    width: 1000px; border-collapse:collapse;
    margin: auto auto 50px;

    th,td{
      border: 1px solid #dcdcdc;
      padding: 10px 20px;

      input,textarea {
        width: -webkit-fill-available;
        height: 40px;
      }
    }
  }
`
const DiaryList = () => {
  const navi = useNavigate();
  const [diaryList, setDiaryList] = useState([]);

  useEffect(()=>{
    const str = localStorage.getItem('diaryList');
    if(str){
      const temp = JSON.parse(str);
      setDiaryList(temp);
    }
  },[]);

  return (
    <StyledDiary>
      <div>
        <h1>My Diary🎀</h1>
      <table>
        <colgroup>
          <col style={{width:'10%'}}/>
          <col style={{width:'30%'}}/>
          <col style={{width:'30%'}}/>
          <col style={{width:'20%'}}/>
        </colgroup>
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {diaryList.length === 0 ? (
          <tr>
            <td colSpan="4" style={{textAlign: 'center', padding: '20px'}}>
              게시물이 없습니다
            </td>
          </tr>
        ) : (
          diaryList.map((diaryVo, idx) => {
            return(
              <tr key={diaryVo.no || idx}>
                <td>{diaryVo.no}</td>
                <td>{diaryVo.title}</td>
                <td>{diaryVo.content}</td>
                <td>{diaryVo.createAt}</td>
              </tr>
            )
          })
        )}
        </tbody>
      </table>
      <MyBtn onClick={()=>{
        navi('/main/diary/insert')
      }}>다이어리 쓰기</MyBtn>
      </div>
      
    </StyledDiary>
  );
};

export default DiaryList;