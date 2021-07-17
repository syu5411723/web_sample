import { motion } from "framer-motion"
import { useContext } from "react"
import styled, { css, keyframes } from "styled-components"

import { TimeContext } from "../../Layout"
import Right from "../../organism/main/home/Right"
import Left from "../../organism/main/home/Left"
import LetterMotion from "../../atom/main/home/LetterMotion"
import Header from "../Header"
import Carousel from "../../organism/main/home/Carousel"

type ContainerProps = {
    time: boolean
}
const ClipAnimation = keyframes`
    from {
        clip-path: circle(0);
    }
    to {
        clip-path: circle(100%);
    }
`
const Container = styled(motion.div) <ContainerProps>`
    width:100%;
    height:100%;
    ${({ time }) => !time && css`
        clip-path: circle(0);
    `}
    ${({ time }) => time && css`
        animation: ${ClipAnimation} 2.5s ease;
    `}
`

export const HomeMain = () => {
    const { time } = useContext(TimeContext)
    return (
        <>
            <LetterMotion />
            <Container time={time} >
                <Carousel />
                <Header />
                <Right home={true} />
                <Left home={true} />
            </Container>
        </>
    )
}
