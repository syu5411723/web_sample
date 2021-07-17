import { motion } from "framer-motion"
import { useState, useEffect } from "react"
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
    0% {
        transform: translateY(0%);    
    }
    100% {
        transform: translateY(-97.82609%);
    }
`

type SetTime = {
    setTime: boolean
}

const Img = styled(motion.div)`
    position:absolute;
    width:100%;
    height:4600%;
    top:0;
    left:0;
    z-index:40;
    animation: ${Animation} 1.2s steps(45) both;
    animation-delay:3.5s;
    background:url("/images/message_loading (3).svg");
`

const wrapperV = {
    hidden: { opacity: 1 },
    visible: { opacity: 0, transition: { duration: 1.5, delay: 4.3 } }
}

const LetterMotion = () => {
    return (
        <>
            <Inner>
                <Wrapper>
                        < Img
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
