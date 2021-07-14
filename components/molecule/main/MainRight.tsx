import React from 'react'
import Link from 'next/link'
import styled from "styled-components"

import AnimateLine from '../../atom/main/right/AnimateLine'
import Line from '../../atom/main/right/Line'
import SideBg from '../../atom/main/right/SideBg'
import SideText from '../../atom/main/right/SideText'
import { motion } from 'framer-motion'

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
const Links = styled(Link)`
    color: #333;
`
const TextWrapper = styled.a``

const containerV = {
    hidden: {opacity: 0, x: "50px", rotate: 90 },
    visible: {opacity: 1, x: 0, ratate: 90, transition: { duration: 2, delay:2, ease: "easeOut" } },
    exit: {opacity: 0, x: "50px", rotate: 90, transition: { duration: 0.6, } }
}

const MainRight = () => {
    const [isOpen, setOpen] = React.useState(false);
    const RightChange = () => {
        setOpen(!isOpen);
    }
    return (
        <>
            <SideBg
                isOpen={isOpen}
            />
            <AnimateLine isOpen={isOpen} />
            <Links href="/page/wedo" >
                <Container
                    variants={containerV}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseLeave={RightChange}
                    onMouseEnter={RightChange}
                >
                    <Line isOpen={isOpen} />
                    <TextWrapper>
                        <SideText isOpen={isOpen} />
                    </TextWrapper>
                </Container>
            </Links>
        </>
    )
}

export default MainRight