import { motion } from "framer-motion"
import { useState, createContext, Dispatch } from "react"
import styled, { keyframes } from "styled-components"

import HomeImage from "../../organism/main/home/HomeImage"

const BgAnimation = keyframes`
    0% {
        background-color: #fff;
    }
    22.2% {
        background-color: #fff;
    }
    22.3% {
        background-color: #333;
    }
    55.5% {
        background-color: #333;
    }
    55.6% {
        background-color: #000;
    }
    88.8% {
        background-color: #000;
    }
    88.9% {
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
    animation: ${BgAnimation} infinite 18s ;
    animation-delay:5s;
`

// const containerV = {
//     hidden: {},
//     visible: {
//         backgroundColor: ["#fff", "#fff", "#333", "#333", "#000", "#000", "#fff", "#fff",],
//         transition: { duration: 12, delay: 5 },
//         times: [0, 0.222, 0.223, 0.555, 0.556, 0.888, 0.889, 1],
//         loop: Infinity,
//     }
// }
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
