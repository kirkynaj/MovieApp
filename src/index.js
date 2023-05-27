import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { createTheme, ThemeProvider } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#11bae1',
    },
    secondary: {
      main: '#f1f1f1',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI',
    fontSize: 12,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
