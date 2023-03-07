import Header from "./Components/Header";
import HomePage from "./Pages/Home/HomePage";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./Theme";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import RescuePage from "./Pages/Rescues/RescuePage";
import AgencyPage from "./Pages/Agency/AgencyPage";
import SingleAgency from "./Pages/SingleAgency/SingleAgency";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const route = window?.location?.href.split("/")[3]
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" index element={<HomePage/>}/>
        <Route path="/rescues" index element={<RescuePage/>}/>
        <Route path="/ngos-and-people" index element={<AgencyPage/>}/>
        <Route path="/ngo/:slug/:id" index element={<SingleAgency/>}/>
        <Route path="/login" index element={<Login/>}/>
        <Route path="/register" index element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
