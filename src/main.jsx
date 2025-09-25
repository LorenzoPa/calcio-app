import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#047847", // verde Tailwind bg-green-700
    }
  }
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
