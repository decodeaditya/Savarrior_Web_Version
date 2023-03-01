import Header from "./Components/Header";
import HomePage from "./Pages/Home/HomePage";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./Theme";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      sdhsdi
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
