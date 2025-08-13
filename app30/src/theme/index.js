import { createTheme } from '@mui/material/styles';
import { paletteDark, paletteLight } from './palette';

const ligntTheme = createTheme({
  palette: paletteLight,
});
const darkTheme = createTheme({
  palette: paletteDark,
});

export { ligntTheme, darkTheme };
