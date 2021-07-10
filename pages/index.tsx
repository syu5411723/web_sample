import styled from "styled-components"
import { motion } from "framer-motion"
import React, { useContext, useEffect } from "react"

import Layout, { ColorContext } from "../components/Layout"
import Header from "../components/template/Header"
import MainRight from "../components/molecule/main/MainRight"
import MainLeft from "../components/molecule/main/MainLeft"
import { HomeMain } from "../components/template/main/HomeMain"
import LetterMotion from "../components/atom/main/home/LetterMotion"
import PageBlack from "../components/atom/design/PageBlack"

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

const index = () => {
  const { changeColor, setChangeColor } = useContext(ColorContext);
  const times = [9000, 13000, 17000]
  const handlechange = () => {
    setChangeColor(!changeColor);
  }
  useEffect(() => {
    // {times.map((time) => {
    //   setTimeout(() => {
    //     handlechange();
    //   }, time)
    // } )}
    setTimeout(() => {
      handlechange
    }, 9000)
    setTimeout(() => {
      handlechange
    }, 13000)
    setTimeout(() => {
      handlechange
    }, 17000)
  }, [])

  return (
    <>
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
            <Header white={changeColor} home={true} />
            <MainLeft color="#333" />
            <MainRight />
            <HomeMain />
          </Inner>
        </Container>
        <LetterMotion />
        <PageBlack page="home" />
      </Layout>
    </>
  )
}

export default index
