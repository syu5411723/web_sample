import styled from "styled-components"
import { motion } from "framer-motion"
import React, { createContext, useState, Dispatch, useEffect } from "react"
import Head from "next/head"

import Layout from "../components/Layout"
import MainRight from "../components/molecule/main/MainRight"
import MainLeft from "../components/molecule/main/MainLeft"
import { HomeMain } from "../components/template/main/HomeMain"
import LetterMotion from "../components/atom/main/home/LetterMotion"
import PageBlack from "../components/atom/design/PageBlack"
import ChangeLink from "../components/atom/design/ChangeLink"

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position:relative;
  z-index: 2;
  background-color: #fff;
`
const Inner = styled(motion.div)`
  width: 100%;
  height: 100%;
`

const containerV = {
  hidden: { x: "100vw" },
  visible: { x: "0px", transition: { duration: 1, delay: 0.5 } }
}
const innerV = {
  hidden: { clipPath: "circle(0)" },
  visible: { clipPath: "circle(100%)", transition: { duration: 3, delay: 5 } }
}

type ContextProps = {
  time: boolean
}
export const TimeContext = createContext({} as ContextProps);


const index = () => {
  const [time, setTime] = useState(false);
  useEffect(() => {
    const handleTime = setTimeout(() => {
      setTime(true)
    }, 5000)
  }, [])
  return (
    <>
      <Head>
        <title>Super Crowds</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Container
          variants={containerV}
          initial="hidden"
          animate="visible"
        >
          <Inner
            variants={innerV}
            initial="hidden"
            animate="visible"
          >
            <MainLeft />
            <MainRight />
            <TimeContext.Provider value={{ time }}>
              <HomeMain />
            </TimeContext.Provider>
          </Inner>
        </Container>
        <ChangeLink />
        <LetterMotion />
        <PageBlack page="home" />
      </Layout>
    </>
  )
}

export default index
