import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const TextWrapper = styled.div`
    width:100vw;
    height:100%;
    display:flex;
    justify-content:center;
    margin-bottom: 40px;
`

const Text = styled(motion.h3)`
    font-size: 15px;
    letter-spacing: 2px;
    color:#fff;
` 

const SubHead = () => {
    return (
        <>
            <TextWrapper>
                <Text>WHAT WE DO</Text>
            </TextWrapper>
        </>
    )
}

export default SubHead
