import { createContext,useEffect, useState } from "react";
import {db} from "../firebase"
import {doc, onSnapshot,} from "firebase/firestore"

export const TokenContext = createContext()

export const TokenContextProvider = ({children})=>{

    const [registration_ids,setTokens] = useState([])

    useEffect(() => {
        const tokens = onSnapshot(doc(db, "ngos", "phoneID"), (doc) => {
          doc.exists() && setTokens(doc.data().tokens)
        })
        return () => {
          tokens()
        }
      }, [])


    return(
        <TokenContext.Provider value={{registration_ids}}>
            {children}
        </TokenContext.Provider>
    )

}