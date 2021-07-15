import React from "react"

import Head from "next/head"
import Header from "./template/Header"



const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title>Super Crowds</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Header />
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout
