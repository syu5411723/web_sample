import React, {createContext, useState, useEffect} from "react"
import Head from "next/head"

type ContextProps = {
    time: boolean
}
export const TimeContext = createContext({} as ContextProps);


const Layout = ({ children }) => {
    const [time , setTime] = useState(false);
    useEffect(() => {
        const handleTime = setTimeout(() => {
            setTime(true)
        }, 5000)
    },[])
    return (
        <>
            <Head>
                <title>Super Crowds</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet"></link>
            </Head>
            <TimeContext.Provider value={{time}}>
            <div>
                {children}
            </div>
            </TimeContext.Provider>
        </>
    )
}

export default Layout
