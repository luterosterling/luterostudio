"use client";

import { createTheme, responsiveFontSizes  } from "@mui/material/styles";

let theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    primary: {
      main: '#c05bb6',
    },
    secondary: {
      main: '#1a65bc',
    },
  }
});

console.log('theme', theme);
theme = responsiveFontSizes(theme);
export default theme;
