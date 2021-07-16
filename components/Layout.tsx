import React, {createContext, useState, Dispatch, useEffect} from "react"

import Head from "next/head"
import Header from "./template/Header"

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
            </Head>
            {/* <Header /> */}
            <TimeContext.Provider value={{time}}>
            <div>
                {children}
            </div>
            </TimeContext.Provider>
        </>
    )
}

export default Layout
