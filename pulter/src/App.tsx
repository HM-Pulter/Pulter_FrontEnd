import { ThemeProvider } from "styled-components";
import theme from "@/shared/theme";
import React from "react";
import { GlobalStyle } from "@/shared/global";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
};
export default App;
