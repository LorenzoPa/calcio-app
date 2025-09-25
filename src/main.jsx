import { useState, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme.jsx";



/*const theme = createTheme({
  palette: {
    primary: {
      main: "#047847", // verde Tailwind bg-green-700
      
    }
  }
});*/
function Root(){
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme = {darkMode ? darkTheme : lightTheme}>
      <App darkMode = {darkMode} setDarkMode = {setDarkMode} />
    </ThemeProvider>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
