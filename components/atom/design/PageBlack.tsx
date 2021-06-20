import { motion } from 'framer-motion'
import React, { VFC } from 'react'
import styled from 'styled-components'


const BeforeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
    position:fixed;
    top:0;
    left: 0;
`

const contaienrV = {
    hidden: { x: "100vw" },
    visible: { x: "0vw", transition: { duration: 1.3, delay: 0.6 } }
}
type Props = {
    bg: string
}

const PageBlack: VFC<Props> = ({ bg }) => {
    const AfterContainer = styled(motion.div)`
    position:fixed;
    top:0;
    left: 100;
    background-color:${bg};
    width:100vw;
    height: 100vh;
    z-index:1;
`
    return (
        <>
            <BeforeContainer />
            <AfterContainer
                variants={contaienrV}
                initial="hidden"
                animate="visible"
            />
        </>
    )
}

export default PageBlack
