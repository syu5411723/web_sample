import Header from "../components/template/Header"
import ChangeLink from "../components/atom/design/ChangeLink"
import MainRight from "../components/molecule/main/MainRight"
import MainLeft from "../components/molecule/main/MainLeft"
import { HomeMain } from "../components/template/main/HomeMain"
import styled from "styled-components"
import { motion } from "framer-motion"
// import PageBlack from "../components/atom/design/PageBlack"

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
`
const circleV = {
  hidden: {clipPath : "circle(0)"},
  visible: {clipPath :"circle(100%)", transition: {duration: 3}}
}

const index = () => {
  return (
    <>
      <Container
        variants={circleV}
        initial="hidden"
        animate="visible"
      >
        <Header color="#000" />
        <ChangeLink />
        <MainLeft color="#333" />
        <MainRight />
        <HomeMain />
      </Container>
    </>
  )
}

export default index
