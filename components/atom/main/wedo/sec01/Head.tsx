import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    text-align:center;
`
const Text01 = styled(motion.h2)`
    font-size: 40px;
    letter-spacing: 20px;
    color: #fff;
    margin-bottom: 40px;

`
const Text02 = styled(motion.h2)`
    font-size: 40px;
    letter-spacing: 30px;
    color:#fff;
    margin-bottom: 40px;
`



const Head = () => {
    return (
        <>
            <Wrapper>
                <Text01>WE CREATE</Text01>
                <Text02>SENSUS</Text02>
                <Text02>DESIGN</Text02>
            </Wrapper>
        </>
    )
}

export default Head
