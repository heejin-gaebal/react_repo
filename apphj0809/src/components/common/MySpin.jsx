import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const BgSpin = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: rgba(180, 166, 235, 0.5);
  position: absolute;
  left: 0; top: 0;

  & h1{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(61, 44, 123, 0.7);
    padding: 10px;
    width: 99%;
  }
`
const SpinnerDiv = styled('div')`
  width: 100px; height: 100px;
  border: 5px solid transparent; border-radius: 50%;
  background-image: linear-gradient(rgba(180, 166, 235, 0.5), rgba(180, 166, 235, 0.5)), linear-gradient(to right, #3d2c7b 0%, #b4a6eb 50%, #d6cef5 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: ${spin} 1s linear infinite;

  position: absolute;
  left: 47%; top: 45%;
`
const MySpin = () => {
  return (
    <BgSpin>
      <h1>Loading...</h1>
      <SpinnerDiv/>
    </BgSpin>
  );
};

export default MySpin;