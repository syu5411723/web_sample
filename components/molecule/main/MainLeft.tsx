import React, { VFC, useState, useContext } from 'react'
import Link from 'next/link'
import styled from "styled-components"

import AnimateLine from '../../atom/main/left/AnimateLine'
import Line from '../../atom/main/left/Line'
import SideBg from '../../atom/main/left/SideBg'
import SideText from '../../atom/main/left/SideText'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
    position:fixed;
    top:50%;
    left: -49px;
    transform: rotate(90deg);
    z-index: 20;
    color: #fff;
    mix-blend-mode:difference;
`
const Links = styled(Link)``
const TextWrapper = styled.a`
    cursor: pointer;
`
type Props = {
    color: string
}

const containerv = {
    hidden: {opacity:0, x:"-50px", rotate: 90},
    visible: {opacity: 1, x: 0 ,ratate: 90, transition: {duration: 2 , delay:2 ,ease: "easeOut" }},
    exit: {opacity: 0, x:"-50px", rotate: 90,transition:{duration: 0.6,}}
}

const MainLeft: VFC<Props> = ({ color }) => {
    const [leftOpen, setLeftOpen] = useState(false);
    const handleChange = () => {
        setLeftOpen(!leftOpen);
    }
    return (
        <>
            <SideBg
                leftOpen={leftOpen}
            />
            <AnimateLine leftOpen={leftOpen} />
            <Links href="/page/weare">
                <Container
                    variants={containerv}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseLeave={handleChange}
                    onMouseEnter={handleChange}
                >
                    <TextWrapper>
                        <SideText leftOpen={leftOpen} color={color} />
                    </TextWrapper>
                    <Line leftOpen={leftOpen} />
                </Container>
            </Links>
        </>
    )
}

export default MainLeft
