import React, { VFC, useContext } from 'react'
import styled from "styled-components"
import { motion } from 'framer-motion'

import Line from '../../atom/main/left/Line'
import SideText from '../../atom/main/left/SideText'
import { SideContext } from '../../organism/main/home/Left'
import SideBg from '../../atom/main/left/SideBg'
import AnimateLine from '../../atom/main/left/AnimateLine'

const Container = styled(motion.div)`
    position:fixed;
    top:50%;
    left: -49px;
    color: #fff;
    mix-blend-mode:difference;
    cursor: pointer;
    z-index:20;
`
const containerv = {
    hidden: { opacity: 0, x: "-50px", rotate: 90 },
    visible: { opacity: 1, x: 0, rotate: 90, transition: { duration: 2, delay: 1.8, ease: [.89,0,.31,.31] } },
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
