import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"

import Bg from "../../../atom/main/weare/sec01/Bg"
import Img from "../../../atom/main/weare/sec01/Img"
import MainThumb from "../../../molecule/main/design/MainThumb"


const Container = styled.div`
    height: 800px;
    position : relative;
    background-color: #fff;
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


const Sec01 = () => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 0.1], [0, 180])
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
                    <MainThumb text01="WHO WE ARE" text02="WE ARE" text03="SUPER CROWDS" text04="" primary={true} />
                </ThumbWrapper>
                    <Img img="/images/who_01.jpg" primary={true} delay={2.5} />
                    <Img img="/images/who_02.jpg" primary={false}  delay={2.7} />
            </Container>
        </>
    )
}

export default Sec01
