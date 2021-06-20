import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const TextWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom: 30px;
`

const Text = styled(motion.h3)`
    font-size: 16px;
` 

const SubHead = () => {
    return (
        <>
            <TextWrapper>
                <Text style={{color : "#fff"}}>WHAT WE DO</Text>
            </TextWrapper>
        </>
    )
}

export default SubHead
