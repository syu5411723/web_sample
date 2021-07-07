import { motion, useTransform, useViewportScroll } from "framer-motion"
import { VFC } from "react"
import styled from "styled-components"

import BgImg from "../../../../atom/main/wedo/sec01/BgImg"
import Png from "../../../../atom/main/wedo/sec01/Png"

const BgContainer = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    position:fixed;
    top: 10%;
    left:0;
`
const containerV = {
    hidden:{opacity: 0, transition: {duration: 1}},
    visible: {opacity: 1 , transition: {duration: 1}},
}
const transition = {
    duration: 0.8
}
type Props = {
    inView: boolean
}

const Bg = ({inView}) => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 0.1], [0, -10])
    const y2 = useTransform(scrollYProgress, [0, 0.1], [0, 100])
    const y3 = useTransform(scrollYProgress, [0, 0.1], [0, -100])
    return (
        <>
            <BgContainer
                variants={containerV}
                initial="hidden"
                animate={inView ? "hidden" : "visible"}
            >
                <BgImg src="/images/ball-blur.jpg" y={y} img="01" />
                <BgImg src="/images/ball.png" y={y2} img="02"  />
                <BgImg src="/images/ball.png" y={y3}  img="03" />
                <Png />
            </BgContainer>
        </>
    )
}

export default Bg
