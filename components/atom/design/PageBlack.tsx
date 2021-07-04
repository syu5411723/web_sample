﻿import { motion } from 'framer-motion'
import  { VFC } from 'react'
import styled from 'styled-components'


const BeforeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
    position:fixed;
    top:0;
    left: 0;
    z-index: 1;
`

const contaienrV = {
    hidden: { x: "100vw" },
    visible: { x: "0vw", transition: { duration: 1, delay: 0.5 } }
}
const AfterContainer = styled(motion.div)<Props>`
    position:fixed;
    top:0;
    left: 100;
    background-color: ${({primary}) => primary ? "#fff" : "#000"};
    width:100vw;
    height: 100vh;
    z-index:10;
`
type Props = {
    primary: boolean
}

const PageBlack: VFC<Props> = ({ primary }) => {
    return (
        <>
            <BeforeContainer />
            <AfterContainer
                primary={primary}
                variants={contaienrV}
                initial="hidden"
                animate="visible"
            />
        </>
    )
}

export default PageBlack
