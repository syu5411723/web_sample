import styled from "styled-components"
import { motion } from "framer-motion"
import React from "react"

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

const containerV = {
  hidden: { x: "100vw" },
  visible: { x: "0px", transition: { duration: 1, delay: 0.5 } }
}

const index = () => {
  return (
    <>
      <Layout>
        <Container
          variants={containerV}
          initial="hidden"
          animate="visible"
        >
            <MainLeft />
            <MainRight />
              <HomeMain />
        </Container>
        <ChangeLink />
        <LetterMotion />
        <PageBlack page="home" />
      </Layout>
    </>
  )
}

export default index
