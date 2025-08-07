import styled from 'styled-components';

const StyledButton = styled.button`
  width: 200px;
  height: 150px;
  border: 2px solid #7f2fc7;
  background-color: #f5eaff;
  border-radius: 10px;
  font-size: 25px;
  font-weight: 900;
  color: #7f2fc7;
  margin: 0 20px;

  &:hover {
    background-color: #e4c6ff;
  }
`;

const ChoicBtn = ({str, handleChoice}) => {
  return (
    <StyledButton onClick={handleChoice}>{str}</StyledButton>
  );
};

export default ChoicBtn;