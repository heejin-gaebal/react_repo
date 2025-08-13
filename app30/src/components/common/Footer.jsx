import { styled } from '@mui/material/styles';
import MyModal from '../util/MyModal';
import { useState } from 'react';

const StyledFooter = styled('footer')`
  background-color: ${({ theme }) => {
    return theme.palette.primary.main;
  }};
  color: ${({ theme }) => {
    return theme.palette.primary.contrastText;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledFooter>
        <h1 onClick={openModal}>footer</h1>
      </StyledFooter>
      <MyModal isOpen={isOpen} closeModal={closeModal}>
        <h1>모달팝업이다롱</h1>
      </MyModal>
    </>
  );
};

export default Footer;
