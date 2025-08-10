
import { styled } from "@mui/material/styles";
import { DateCalendar, PickersDay  } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; 
import { Outlet } from "react-router-dom";
import { Modal, Box, Typography } from '@mui/material';

const DashBoard = styled('div')`
  width: 80%; padding: 20px;
  border: 3px solid #b9b0da;
  border-radius: 10px;
  display: flex; justify-content: space-evenly;
  gap: 20px;

  & .myhome{
    width: 50%; height: 100%; border-radius: 10px;
    background: url(https://i.redd.it/girl-room-isometric-art-v0-dnh7yzbumnxa1.jpg?width=1440&format=pjpg&auto=webp&s=e023c887a70cde5e6a4472b72d6cdb37af772f51) no-repeat;
    background-size: cover; position: relative;

    & img{
      width: 80px; height: 80px;
      object-fit: contain;
      position: absolute;
      left: 11%; top: 60%;
    }
  }

  & .calendar{
    width: 50%; height: 100%;
    display: flex; gap: 10px;
    flex-direction: column; justify-content: space-between;
    
    & .css-5wchs2-MuiDateCalendar-root{width: 100%; border: 2px solid #e4def8; border-radius: 10px;height: 50%;}

    & .css-1rl1vrc-MuiDayCalendar-header, .css-1pv2de5-MuiDayCalendar-weekContainer{
      justify-content: space-evenly;
    }
    & .css-1pv2de5-MuiDayCalendar-weekContainer{margin: 0;}
    & .css-17f9e7e-MuiTypography-root-MuiDayCalendar-weekDayLabel, .css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root, 
    .css-qct7wd-MuiButtonBase-root-MuiPickersDay-root{
      font-size: 16px;
    }
    & .css-qct7wd-MuiButtonBase-root-MuiPickersDay-root.Mui-selected, 
      .css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root.Mui-selected{
        background-color: #b4a6eb;
    }
    & .css-qct7wd-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected){border: 2px solid #755dcf;}
    
    & .myBgm{
      width: 100%; height: 50%; border-radius: 10px; padding: 10px;
      background: #e4def8; border: 2px dashed #b4a6eb;
      
      & h3{margin: 0 0 5px; color:#3d2c7b}

      .video-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 39.375%; /* 16:9 비율 (9/16 * 100) - 높이를 270px 기준으로 조정 */
        overflow: hidden;
      }

      .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
      }
    }
  }
`

const MyDashBoard = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  //다이어리 일정 불러오기
  const [diaryList, setDiaryList] = useState([]);

  useEffect(()=>{
    const str = localStorage.getItem("diaryList");
    const diaryVoList = str ? JSON.parse(str) : [];
      setDiaryList(diaryVoList);
  },[]);

  //일정이 있는 날짜 리스트
  const diaryDates = diaryList.map(diaryVo => dayjs(diaryVo.createAt).format("YYYY년 MM월 DD일"));

  //날짜 매칭하기
  const selectedFormatted = selectedDate.format("YYYY년 MM월 DD일");
  const selectedDiary = diaryList.filter(diary => diary.createAt === selectedFormatted);

  //날짜 확인체크
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setOpenModal(true);
  };

  //모달 띄우기
  const [openModal, setOpenModal] = useState(false);

  return (
    
    <DashBoard>
      <div className="myhome">
        <img src="https://media.tenor.com/YSzBJZA8P0cAAAAj/cat-black.gif" alt="" />
      </div>
      <div className="calendar">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
          <DateCalendar 
            value={selectedDate}
            onChange={handleDateChange}
            views={['year', 'month', 'day']}
            showDaysOutsideCurrentMonth
            renderDay={(day, _value, DayComponentProps) => {
            const formatted = day.format("YYYY년 MM월 DD일");
            const hasDiary = diaryDates.includes(formatted);
              return (
                 <PickersDay {...DayComponentProps} sx={{ position: 'relative' }} />
              );
            }}
          />
        </LocalizationProvider>

        <div className="myBgm">
          <h3>My BGM</h3>
          <div className="video-container">
            <iframe width="685" height="270" 
            src="https://www.youtube.com/embed/QYh6mYIJG2Y?si=wJ6bWOraxeQNl1KR&amp;start=150&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      {/* 모달 영역 */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: '#fef0f5',
          border: '2px solid #b4a6eb',
          borderRadius: '10px',
          boxShadow: 24,
          p: 3,
        }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            📝 {selectedFormatted}의 다이어리
          </Typography>
          {selectedDiary.length > 0 ? (
            <ul>
              {selectedDiary.map((diary, idx) => (
                <li key={idx}>
                  <strong>제목:</strong> {diary.title}<br />
                  <strong>내용:</strong> {diary.content}
                </li>
              ))}
            </ul>
          ) : (
            <Typography>작성된 다이어리가 없습니다.</Typography>
          )}
        </Box>
      </Modal>
      <Outlet/>
    </DashBoard>
  );
};

export default MyDashBoard;