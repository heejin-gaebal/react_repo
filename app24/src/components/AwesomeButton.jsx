import styled from 'styled-components';

const StyledButton = styled.button`
  width: 200px;
  height: 150px;
  border: 2px solid #333;
  background-color: #f545ac;
  border-radius: 10px;
  font-size: 25px;
  font-weight: 900;
  color: #fff;

  &:hover {
    background-color: #df2b94;
  }
`;

const AwesomeButton = ({ str, f }) => {
  return <StyledButton onClick={f}>{str}</StyledButton>;
};

export default AwesomeButton;
