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
import { useEffect, useState, useContext } from 'react';
import { onSnapshot, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db, messaging, vapidKey } from './firebase';
import Report from "./Pages/Report";
import { getToken } from "firebase/messaging";
import axios from "axios";
import { TokenContext } from './Context/TokenContext';

function App() {

  const reqPermission = async () => {
    const permission = await Notification.requestPermission()
    if (permission === "granted") {
      const token = await getToken(messaging, { vapidKey: vapidKey })
      await updateDoc(doc(db, "ngos", "phoneID"), {
        tokens: arrayUnion(token)
      })
    } else if (permission === "denied") {
      alert("Please Allow for Sending Notification")
    }
  }

  const [RescuesList, setRescues] = useState([])
  const [NgosList, setNgo] = useState([])

  useEffect(() => {
    const rescues = onSnapshot(doc(db, "reportedRescues", "reportedRescues"), (doc) => {
      doc.exists() && setRescues(doc.data().rescues)
    })
    return () => {
      rescues()
    }
  }, [])


  useEffect(() => {
    const ngos = onSnapshot(doc(db, "ngos", "ngos"), (doc) => {
      doc.exists() && setNgo(doc.data().ngoList)
    })
    return () => {
      ngos()
    }
  }, [])


  const url = "Savarrior - Help Earthlings & Voiceless"

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<HomePage RescuesList={RescuesList} AgencyList={NgosList} url={url} />} />
          <Route path="/rescues" element={<RescuePage RescuesList={RescuesList} url={url} setRescues={setRescues}/>} />
          <Route path="/ngos-and-people" element={<AgencyPage AgencyList={NgosList} url={url} />} />
          <Route path="/ngo/:slug/:id" element={<SingleAgency url={url} />} />
          <Route path="/rescue/:id" element={<RescuePage RescuesList={RescuesList} url={url} setRescues={setRescues}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/report-a-rescue" element={<Report url={url} />} />
        </Routes>
        <div><Footer req={reqPermission} /></div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
