import Header from "./Components/Header";
import HomePage from "./Pages/Home/HomePage";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./Theme";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RescuePage from "./Pages/Rescues/RescuePage";
import AgencyPage from "./Pages/Agency/AgencyPage";
import SingleAgency from "./Pages/SingleAgency/SingleAgency";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useEffect } from 'react';
import Report from "./Pages/Report";
import OneSignal from "react-onesignal";

function App() {

  // const reqPermission = async () => {
  //   const permission = await Notification.requestPermission()
  //   if (permission === "granted") {

  //   } else if (permission === "denied") {
  //     alert("Please Allow for Sending Notification")
  //   }
  // }


  useEffect(() => {
    OneSignal.init({ appId: 'bb8fb3ed-6c11-4dc4-b026-83d3d29e45ee', allowLocalhostAsSecureOrigin: true});
    OneSignal.showSlidedownPrompt();
  });



  const url = "Savarrior - Help Earthlings & Voiceless"

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<HomePage url={url} />} />
          <Route path="/rescues" element={<RescuePage url={url} />} />
          <Route path="/ngos-and-people" element={<AgencyPage url={url} />} />
          <Route path="/ngo/:slug/:id" element={<SingleAgency url={url} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/report-a-rescue" element={<Report url={url} />} />
        </Routes>
        <div><Footer /></div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
