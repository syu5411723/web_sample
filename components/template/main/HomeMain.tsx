import { motion } from "framer-motion"
import { useState, createContext, Dispatch } from "react"
import styled, { keyframes } from "styled-components"

import HomeImage from "../../organism/main/home/HomeImage"

const BgAnimation = keyframes`
    0% {
        background-color: #fff;
    }
    5% {
        background-color: #333;
    }
    33.3% {
        background-color: #333;
    }
    38.3% {
        background-color: #000;
    }
    66.6% {
        background-color: #000;
    }
    71.6% {
        background-color: #fff;
    }
    100% {
        background-color: #fff;
    }
`
const Container = styled(motion.div)`
    width:100vw;
    height: 100vh;
    background-color: #fff;
    animation: ${BgAnimation} infinite 12s ;
    animation-delay:9.1s;
`
export interface contextProps {
    time: boolean
    setTime: Dispatch<React.SetStateAction<boolean>>
    handleTime: () => void
}
export const TimeContext = createContext({} as contextProps)

export const HomeMain = () => {
    const [time, setTime] = useState(false);
    const handleTime = () => setTime(true);
    const swiperTime = setTimeout(() => {
        setTime(true)
    }, 5000);
    return (
        <>
            <Container className={time && "animate" }>
                <TimeContext.Provider value={{ time, setTime, handleTime }}>
                    <HomeImage />
                </TimeContext.Provider>
            </Container>
        </>
    )
}
