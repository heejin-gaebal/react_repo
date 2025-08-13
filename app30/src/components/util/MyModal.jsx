import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const OverlayDiv = styled('div')`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerDiv = styled('div')`
  width: 50%;
  height: 50%;
  border: 3px solid #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const MyModal = ({ children, isOpen, closeModal }) => {
  useEffect(() => {
    //ESC로 모달창 끄기
    function handleEsc(evt) {
      if (evt.key === 'Escape') {
        console.log(evt);

        closeModal();
      }
    }

    //랜더링 이후 실행
    window.addEventListener('keydown', handleEsc);

    return () => {
      //언마운트 이후 이벤트 제거
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <OverlayDiv onClick={closeModal}>
        <ContainerDiv
          onClick={(evt) => {
            evt.stopPropagation();
            //부모 요소의 이벤트가 작동되는 걸 막아줌
          }}
        >
          {children}
        </ContainerDiv>
      </OverlayDiv>
    </>,
    document.body
  );
};

export default MyModal;
