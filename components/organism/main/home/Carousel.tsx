import { motion } from "framer-motion"
import { useContext, useReducer, useEffect } from "react"
import styled from "styled-components"

import { TimeContext } from "../../../Layout"
import CarouselInner from "../../../molecule/main/home/CarouselInner"


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
const Carousel = () => {
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
                <CarouselWrapper bg={bg}>
                    <CarouselInner />
                </CarouselWrapper>
        </>
    )
}

export default Carousel
