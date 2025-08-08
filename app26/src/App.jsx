import './App.css';
import { Button, TextField, Typography } from '@mui/material';
import { Delete as DeleteIcon, Send as SendIcon } from '@mui/icons-material';
import CustomBtn from './styles/CustomBtn';
import MyBtn from './styles/MyBtn';

function App() {
  return (
    <>
      {/* <div>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>

        <br />
        <Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <br />
        <br />
        <hr />
        <br />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <br />
        <hr />
        <br />
        <Button variant="outlined" size="small">
          야오옹
        </Button>
        <Button variant="contained" color="warning" size="large">
          Send
        </Button>
        <br />
        <hr />
        <br />
        <Typography variant="h1">h1</Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
        <Typography variant="h7">h7</Typography>

        <Typography variant="subtitle1">sub1</Typography>
        <Typography variant="subtitle2">sub2</Typography>

        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
      </div> */}
      <div>
        {/* <CustomBtn>CustomBtn</CustomBtn> */}
        <MyBtn>
          <h1>내버튼</h1>
        </MyBtn>
      </div>
    </>
  );
}

export default App;
