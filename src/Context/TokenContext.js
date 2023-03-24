import { createContext,useEffect, useState } from "react";
import {db,serverKey} from "../firebase"
import {doc, onSnapshot,} from "firebase/firestore"
import axios from "axios";

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

      const sendNoti = (notification) => {

        const data = JSON.stringify({
          data: {},
          notification: notification,
          registration_ids: registration_ids,
        });
    
        const config = {
          method: 'post',
          url: 'https://fcm.googleapis.com/fcm/send',
          headers: {
            Authorization:
              `key=${serverKey}`,
            'Content-Type': 'application/json',
          },
          data: data,
        };
    
    
        axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    


    return(
        <TokenContext.Provider value={{registration_ids,sendNoti}}>
            {children}
        </TokenContext.Provider>
    )

}