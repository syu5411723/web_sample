
import { motion } from "framer-motion"
import styled from "styled-components"
import React, { useEffect } from "react"

import { Sec01, Sec02, Sec03, Sec04, Sec05, Sec06, Sec07 } from "../../organism/main/weare/index"
import Footer from "../../molecule/footer/Footer"
import Header from "../Header"

const Container = styled(motion.div)`
    margin-top: 200px;
    position:relative;
    z-index:10;
`
const containerV = {
    hidden: {opacity: 0},
    visible: {opacity: 1,transtion: {duration:0.6,delay: 1}}
}

const WeAreMain = () => {
    useEffect(() => {
        const Top = () => {
            window.scrollTo({ top: 0 })
        }
    }, [])
    return (
        <>
            <Container
                variants={containerV}
                initial="hidden"
                animate="visible"
            >
                <Header />
                <Sec01 />
                <Sec02 />
                <Sec03 />
                <Sec04 />
                <Sec05 />
                {/* <Sec06 /> */}
                <Sec07 />
                <Footer primary={true} />
            </Container>
        </>
    )
}

export default WeAreMain
