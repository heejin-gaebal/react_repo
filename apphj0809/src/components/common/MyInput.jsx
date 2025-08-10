import { styled } from "@mui/material/styles";

const StyledInput = styled("input")`
    font-size: 16px;
    border: 1px solid #755dcf;
    border-radius: 5px;
    height: 30px;
`

const MyInput = (props) => {
  return (<StyledInput {...props}/>);
};

export default MyInput;