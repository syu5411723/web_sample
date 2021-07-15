import { motion } from "framer-motion"
import { useContext, useReducer, useEffect } from "react"
import styled from "styled-components"

import Carousel from "../../molecule/main/home/Carousel"
import { TimeContext } from "../../Layout"

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
const Wrapper = styled(motion.div)`
    width: 100%;
    height: 100%;
`
const CarouslInner = styled(motion.div) < State>`
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

const wrapperV = {
    hidden: { clipPath: "circle(0)" },
    visible: { clipPath: "circle(100%)", transition: { duration: 3, delay: 5 } }
}

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
            <Wrapper
                variants={wrapperV}
                initial="hidden"
                animate="visible"
            >
                <CarouslInner bg={bg}>
                    <Carousel />
                </CarouslInner>
            </Wrapper>
        </>
    )
}
