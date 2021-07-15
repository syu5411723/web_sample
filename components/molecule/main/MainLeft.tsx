import React, { VFC, useContext } from 'react'
import styled from "styled-components"

import Line from '../../atom/main/left/Line'
import SideText from '../../atom/main/left/SideText'
import { motion } from 'framer-motion'
import { TimeContext } from '../../Layout'
import { SideContext } from '../../organism/main/home/Left'

const Container = styled(motion.div)`
    position:fixed;
    top:50%;
    left: -49px;
    transform: rotate(90deg);
    z-index: 50;
    color: #fff;
    mix-blend-mode:difference;
    cursor: pointer;
`

const containerv = {
    hidden: { opacity: 0, x: "-50px", rotate: 90 },
    visible: { opacity: 1, x: 0, rotate: 90, transition: { duration: 2, delay: 1.8, ease: "easeOut" } },
    exit: { opacity: 0, x: "-50px", rotate: 90, transition: { duration: 0.6 } }
}
type Props = {
    time: boolean
}

const MainLeft: VFC<Props> = ({ time }) => {
    const { open, handleChange } = useContext(SideContext)
    return (
        <>
            <Container
                variants={containerv}
                initial="hidden"
                animate={time ? "visible" : "hidden"}
                exit="exit"
                onMouseLeave={handleChange}
                onMouseEnter={handleChange}
            >
                <SideText leftOpen={open} />
                <Line leftOpen={open} />
            </Container>
        </>
    )
}

export default MainLeft
