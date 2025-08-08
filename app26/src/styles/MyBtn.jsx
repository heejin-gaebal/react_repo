import { Button, styled } from '@mui/material';
const StyledButton = styled(Button)((props) => {
  return {
    backgroundColor: props.c,
    color: '#000',
  };
});

const MyBtn = ({ children }) => {
  return (
    <>
      <StyledButton c="pink" disableRipple={true} size="small">
        {children}
      </StyledButton>
      <StyledButton disableRipple={false} size="large">
        {children}
      </StyledButton>
      <StyledButton disabled size="large" color="primary">
        {children}
      </StyledButton>
    </>
  );
};

export default MyBtn;
