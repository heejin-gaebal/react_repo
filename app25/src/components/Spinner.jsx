import { styled, keyframes } from 'styled-components';

const x = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledDiv = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid lightgray;
  border-top-color: #b991db;
  border-radius: 50%;
  margin: auto;

  animation: ${x} 1s linear infinite;
`;

const Spinner = () => {
  return <StyledDiv />;
};

export default Spinner;
