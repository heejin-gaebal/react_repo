import { styled } from '@mui/material/styles';
import { use, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import MyModal from '../util/MyModal';
import useModal from '../../hooks/useModal';

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

const ModalLayoutDiv = styled('div')`
  display: grid;
  width: 80%;
  height: 80%;
  padding: 10px 30px;
  background-color: #dcfcf7;
  grid-template-rows: 100px 1fr;
  grid-template-columns: repeat(3, 1fr);
  place-items: center center;
  & > p:last-child {
    grid-column: span 3;
    place-self: start start;
  }
`;

const NoticeList = () => {
  const url = 'http://127.0.0.1:8080/api/notice';
  const option = {};
  const initState = [];
  const { data: voList, isLoading } = useFetch(url, option, initState);
  const { isOpen, openModal, closeModal } = useModal();
  const [modalVo, setModalVo] = useState({});

  //Modal 번호 따라 상세조회
  function getNoticeByNo(vo) {
    const url = `http://127.0.0.1:8080/api/notice/${vo.no}`;
    fetch(url, option)
      .then((resp) => resp.json())
      .then((data) => {
        //open modal
        openModal();
        //set modalData
        setModalVo(vo);
      });
  }

  return (
    <>
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
                  <tr
                    onClick={() => {
                      getNoticeByNo(vo);
                    }}
                  >
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
      <MyModal isOpen={isOpen} closeModal={closeModal}>
        <ModalLayoutDiv>
          <p>번호 : {modalVo.no}</p>
          <p>제목 : {modalVo.title}</p>
          <p>조회수 : {modalVo.hit}</p>
          <p>내용 : {modalVo.content}</p>
        </ModalLayoutDiv>
      </MyModal>
    </>
  );
};

export default NoticeList;
