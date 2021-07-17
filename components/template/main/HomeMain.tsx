import { motion } from "framer-motion"
import { useContext, useReducer, useEffect } from "react"
import styled, { css, keyframes } from "styled-components"

import Carousel from "../../molecule/main/home/Carousel"
import { TimeContext } from "../../Layout"
import Right from "../../organism/main/home/Right"
import Left from "../../organism/main/home/Left"
import LetterMotion from "../../atom/main/home/LetterMotion"
import Header from "../Header"

type State = { bg: string }
const initialState = { bg: "white" }

type Action =
    | { type: "white" }
    | { type: "pink" }
    | { type: "black" }

const reducer = (state: State, actoin: Action) => {
    switch (actoin.type) {
        case "white":
            return { bg: "white" }
        case "pink":
            return { bg: "pink" }
        case "black":
            return { bg: "black" }
        default:
            return state
    }
}
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
const CarouselWrapper = styled(motion.div) <State>`
    width: 100%;
    height: 100%;
    transition: .2s;
    background-color: #fff;
    background-color: ${
        ({ bg }) =>
            bg === "white" && "#fff" ||
            bg === "pink" && "#D0B2A2" ||
            bg === "black" && "#333"
    };
`

const containerV = {
    hidden: { clipPath: "circle(0)" },
    visible: { clipPath: "circle(100%)", transition: { duration: 2.5, }}
}

export const HomeMain = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { time } = useContext(TimeContext)
    const bg = state.bg
    useEffect(() => {
        if (time === true) {
            const timer = setTimeout(() => {
                if (bg === "white") {
                    dispatch({ type: "pink" });
                }
                if (bg === "pink") {
                    dispatch({ type: "black" });
                }
                if (bg === "black") {
                    dispatch({ type: "white" });
                }
            }, 4000)
            return () => clearTimeout(timer);
        }
    })
    return (
        <>
            <LetterMotion />
            <Container time={time} >
                <CarouselWrapper bg={bg}>
                    <Carousel />
                </CarouselWrapper>
                <Header />
                <Right home={true} />
                <Left home={true} />
            </Container>
        </>
    )
}
