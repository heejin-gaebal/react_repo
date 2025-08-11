import { createTheme } from '@mui/material/styles';

const ligntTheme = createTheme({
  palette: {
    kh: {},
  },
});
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

export { ligntTheme, darkTheme };
