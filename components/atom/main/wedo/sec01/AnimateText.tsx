import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import Headtext from './Headtext'

const Wrapper = styled(motion.div)`
    text-align:center;
    display:flex;
    justify-content:center;
    height:50px;
    overflow:hidden;
    width:100%;
    margin-bottom: 40px;
`
const wrapperV = {
    hidden: {opacity: 0},
    visible: {opacity: 1 ,transition: {staggerChildren: 0.03, delayChildren: 2}},
}

const AnimateText = ({text01, text02, text03, text04, text05, text06, text07, text08, text09}) => {
    return (
        <>
            <Wrapper
                variants={wrapperV}
                initial="hidden"
                animate="visible"
            >
                <Headtext text={text01}  />
                <Headtext text={text02} />
                <Headtext text={text03} />
                <Headtext text={text04} />
                <Headtext text={text05} />
                <Headtext text={text06} />
                <Headtext text={text07} />
                <Headtext text={text08} />
                <Headtext text={text09} />
            </Wrapper>
        </>
    )
}

export default AnimateText
