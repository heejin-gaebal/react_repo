import { styled } from "@mui/material/styles";

const MyButton = styled("button")`
    padding: 10px 20px;
    font-size: 16px;
    border: 1px solid transparent;
    border-radius: 5px;
    background: #755dcf;
    box-shadow: 1px 3px 4px #5e4ba5;
    color: #fff;
    transition: ease-in-out 0.2s;

    &:hover{
      border: 1px solid #755dcf;
      background-color: #e4def8;
      color: #755dcf;
    }
`

const MyBtn = ({children, onClick}) => {
  return (
    <MyButton onClick={onClick}>{children}</MyButton>
  );
};

export default MyBtn;