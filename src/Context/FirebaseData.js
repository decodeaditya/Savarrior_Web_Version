import { createContext, useState, useEffect } from "react";
import { onSnapshot, doc, } from 'firebase/firestore';
import { db } from '../firebase';

export const FirebaseContext = createContext()

export const FirebaseContextProvider = ({ children }) => {

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

    return (
        <FirebaseContext.Provider value={{RescuesList,NgosList}}>
            {children}
        </FirebaseContext.Provider>
    )
}


