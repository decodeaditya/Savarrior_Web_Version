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
import { useEffect, useState } from 'react';
import { onSnapshot, doc } from 'firebase/firestore';
import { db } from './firebase';
import Report from "./Pages/Report";

function App() {


    const [RescuesList, setRescues] = useState([])
    const [NgosList,setNgo] = useState([])

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


  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<HomePage RescuesList={RescuesList} AgencyList={NgosList}/>} />
          <Route path="/rescues" index element={<RescuePage RescuesList={RescuesList}/>} />
          <Route path="/ngos-and-people" index element={<AgencyPage AgencyList={NgosList}/>} />
          <Route path="/ngo/:slug/:id" index element={<SingleAgency />} />
          <Route path="/login" index element={<Login />} />
          <Route path="/register" index element={<Register/>} />
          <Route path="/report-a-rescue" index element={<Report />} />
        </Routes>
        <div> <Footer /></div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
