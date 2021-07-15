import React, { VFC } from 'react'
import styled from "styled-components"
import { motion } from 'framer-motion'


import AnimateLine from '../../atom/main/right/AnimateLine'
import Line from '../../atom/main/right/Line'
import SideBg from '../../atom/main/right/SideBg'
import SideText from '../../atom/main/right/SideText'
import { RightContext } from '../../organism/main/home/Right'


const Container = styled(motion.div)`
    position:fixed;
    top:50%;
    right: -50px;
    transform: rotate(90deg);
    z-index: 20;
    cursor: pointer;
    color: #fff;
    mix-blend-mode:difference;
`
const containerV = {
    hidden: { opacity: 0, x: "50px", rotate: 90 },
    visible: { opacity: 1, x: 0, rotate: 90, transition: { duration: 2, delay: 1.8, ease: "easeOut" } },
    exit: { opacity: 0, x: "50px", rotate: 90, transition: { duration: 0.6, } }
}
type Porps = {
    time: boolean
}

const MainRight: VFC<Porps> = ({ time }) => {
    const { open, handleChange } = React.useContext(RightContext)
    return (
        <>
            <Container
                variants={containerV}
                animate={time ? "visible" : "hidden"}
                exit="exit"
                onMouseLeave={handleChange}
                onMouseEnter={handleChange}
            >
                <Line isOpen={open} />
                <SideText isOpen={open} />
            </Container>

        </>
    )
}

export default MainRight