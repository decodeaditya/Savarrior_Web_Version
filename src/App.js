import Header from "./Components/Header";
import HomePage from "./Pages/Home/HomePage";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./Theme";
import Rescues from "./Pages/Home/Rescues";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <HomePage/>
      <Rescues/>
    </ThemeProvider>
  );
}

export default App;
