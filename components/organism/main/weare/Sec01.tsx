import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"
import React, { useEffect } from "react"

import Bg from "../../../atom/main/weare/sec01/Bg"
import Img from "../../../atom/main/weare/sec01/Img"
import MainThumb from "../../../molecule/main/design/MainThumb"


const Container = styled.div`
    height: 800px;
    position : relative;
    /* background-color: #fff; */
`
const ThumbWrapper = styled(motion.div)`
    position:absolute;
    z-index:5;
    top: 130px;
    left: 100px;
`
const ImgWrapper = styled(motion.div)`
`

const thumbV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 2.2 } }
}
const imgV = {
    hidden: { opacity: 0, x: "7vw", y: "7vw" },
    visible: { opacity: 1, x: "0px", y: "0px", transition: { duration: 0.5, delay: 2.5 } },
}
const img02V = {
    hidden: { opacity: 0, x: "7vw", y: "7vw" },
    visible: { opacity: 1, x: "0px", y: "0px", transition: { duration: 0.5, delay: 2.7 } },
}


const Sec01 = () => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 0.1], [0, 180])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <Container>
                <Bg />
                <ThumbWrapper
                    style={{ y: y }}
                    variants={thumbV}
                    initial="hidden"
                    animate="visible"
                >
                    <MainThumb text01="WHO WE ARE" text02="WE ARE" text03="CROWDS" text04="" text05="" primary={true} span={true} />
                </ThumbWrapper>
                <Img />
            </Container>
        </>
    )
}

export default Sec01
