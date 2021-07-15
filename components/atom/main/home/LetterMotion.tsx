import { motion } from "framer-motion"
import { useState } from "react"
import styled, { keyframes, css } from "styled-components"

import LetterPath from "./LetterPath"

const Inner = styled.div`
    width: 496px;
    height: 186px;
    margin:auto;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
`
const Wrapper = styled(motion.div)`
    width: 496px;
    height: 186px;
    position:relative;
    overflow:hidden;
    z-index:30;
`
const Animation = keyframes`
    from {
        transform: translateY(0);    
    }
    to {
        transform: translateY(-97.82609%);
    }
`
type SetTime = {
    setTime: boolean
}
const Img = styled(motion.div) <SetTime>`
    position:absolute;
    width:100%;
    height:4600%;
    top:0;
    left:0;
    ${({ setTime }) => setTime && css`
        animation: ${Animation} 2s steps(45) both;
    `}
    &::before {
        content: url("/images/motion.svg");
        display:block;
        width:100%;
        height:100%;
    }
`
const wrapperV = {
    hidden: { opacity: 1 },
    visible: { opacity: 0, transition: { duration: 2.5, delay: 4 } }
}

const LetterMotion = () => {
    const [timed, setTimed] = useState(false);
    const handleTimed = setTimeout(() => {
        setTimed(true);
    }, 2000)
    return (
        <>
            <Inner>
                <Wrapper>
                    <Img setTime={timed}
                        variants={wrapperV}
                        initial="hieen"
                        animate="visible"
                    />
                    <LetterPath />
                </Wrapper>
            </Inner>
        </>
    )
}

export default LetterMotion
