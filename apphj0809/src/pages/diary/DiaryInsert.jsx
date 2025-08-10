import { useState } from "react";
import MyBtn from "../../components/common/MyBtn";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Swal from 'sweetalert2'
import dayjs from "dayjs";

const StyledDiary = styled('div')`
  width: 80%; padding: 20px;
  border: 3px solid #b9b0da;
  border-radius: 10px; 
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  gap: 50px;

  & h1{
    margin-top: 0;
  }
  
  & table{
    width: 800px; border-collapse:collapse;
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

  & .btnWrap{
    width: 100%; gap: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const DiaryInsert = () => {
  const navi = useNavigate();
  const [diaryVo, setDiaryVo] = useState({
    no : '',
    title : '',
    content : '',
    createAt : ''
  });

  function hadleSubmit (evt){
    evt.preventDefault();
    const str = localStorage.getItem("diaryList");
    const diaryList = str ? JSON.parse(str) : [];
    diaryList.push(diaryVo);
    localStorage.setItem("diaryList", JSON.stringify(diaryList));

    Swal.fire("다이어리 등록 완료!");
    navi("/main/diary/list");
  }

  function handleChange (evt){
    setDiaryVo({...diaryVo, [evt.target.name] : evt.target.value})
  }

  const datePickerFormat = "YYYY-MM-DD";
  const datePickerUtils = {
    format: datePickerFormat,
    parse: (value) => dayjs(value, datePickerFormat, true).toDate(),
  };

  return (
    <StyledDiary>
      <h1>🎀My Diary🎀</h1>
      <form onSubmit={hadleSubmit}>
        <table>
          <tbody>
            <tr>
              <th>번호</th>
              <td><input type="text" name="no" placeholder="번호"  onChange={handleChange}/></td>
            </tr>
            <tr>
              <th>제목</th>
              <td><input type="text" name="title" placeholder="제목 입력하기"  onChange={handleChange}/></td>
            </tr>
            <tr>
              <th>내용</th>
              <td><textarea name="content" placeholder="내용 입력하기" onChange={handleChange}></textarea></td>
            </tr>
            <tr>
              <th>작성일</th>
              <td>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="작성일" format={datePickerFormat}
                      onChange={(date) => {
                        const formattedDate = dayjs(date).format("YYYY년 MM월 DD일");
                        setDiaryVo({ ...diaryVo, createAt: formattedDate });
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btnWrap">
          <MyBtn type="submit">등록</MyBtn>
          <MyBtn type="button" onClick={(e)=>{
            e.preventDefault(); 
            navi("/main/diary/list")
          }}>취소</MyBtn>
        </div>
      </form>
    </StyledDiary>
  );
};

export default DiaryInsert;