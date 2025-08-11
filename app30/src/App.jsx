import './App.css';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, ligntTheme } from './theme';
import { useSelector } from 'react-redux';

function App() {
  const { isDark } = useSelector((state) => {
    return state.theme;
  });

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : ligntTheme}>
        <MainLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
