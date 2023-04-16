import { createContext, useState, useEffect } from "react";

export const MessageContext = createContext()

export const MessageContextProvider = ({ children }) => {


    const sendMsg = (msg) => {
        
        
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                Authorization: `Basic NTM1NzRmZjctNmU3Yy00OWUyLTkwNTMtMzA1YzczZjg3Njlm`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                app_id: '58285ad0-aa59-43f9-bae2-f8136f5098e0',
                big_picture: msg.img,
                ios_attachments: { id: msg.img },
                chrome_web_image: msg.img,
                included_segments: ['Subscribed Users'],
                contents: { en: msg.heading, es: 'Spanish Message' },
                headings:{ en: msg.subtitle, es: 'Spanish Message' },
                name: 'New Rescue!',
                web_url: "https://savarrior.netlify.app/rescues",
                app_url: "https://savarrior.netlify.app/rescues"
            })
        };


        fetch('https://onesignal.com/api/v1/notifications', options)
            .then(response => response.json())
    }

    return (
        <MessageContext.Provider value={{sendMsg}}>
            {children}
        </MessageContext.Provider>
    )
}