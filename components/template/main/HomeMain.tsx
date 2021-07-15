import { motion } from "framer-motion"
import { constants } from "node:buffer"
import { useContext, useReducer, useEffect } from "react"
import styled, { keyframes } from "styled-components"

import Carousel from "../../molecule/main/home/Carousel"
import { TimeContext } from "../../../pages"
import { useDistortionEffectCarousel } from "distortion-effect-carousel"

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

const Container = styled(motion.div) <State>`
    width:100vw;
    height: 100vh;
    background-color: #fff;
    background-color: ${({ bg }) =>
        bg === "white" && "#fff" ||
        bg === "pink" && "#D0B2A2" ||
        bg === "black" && "#333"
    };
    transition: 0.2s;
`

export const HomeMain = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { time } = useContext(TimeContext)
    const bg = state.bg
    useEffect(() => {
        if (time === true) {
            const timer = setTimeout(() => {
                if (time === true) {
                    dispatch({ type: "pink" });
                }
                if (bg === "pink") {
                    dispatch({type : "black"});
                }
                if (bg  === "black") {
                    dispatch({type: "white"});
                }
            }, 4000)
            return () => clearTimeout(timer);
        }
    })
    return (
        <>
            <Container className={time && "animate"} bg={bg}>
                <Carousel />
            </Container>
        </>
    )
}
