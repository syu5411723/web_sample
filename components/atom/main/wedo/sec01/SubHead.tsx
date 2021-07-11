import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const TextWrapper = styled.div`
    width:100vw;
    height:40px;
    display:flex;
    justify-content:center;
    margin-bottom: 40px;
    overflow:hidden;
`

const Text = styled(motion.h3)`
    font-size: 15px;
    letter-spacing: 2px;
    color:#fff;
`
const textV = {
    hidden: { oapcity: 0, y: "-40px" },
    visible: { opacity: 1, y: "0px", transition: { type: "spring", stiffness: 100, delay: 1.9 } }
}

const SubHead = () => {
    return (
        <>
            <TextWrapper>
                <Text
                    variants={textV}
                    initial="hidden"
                    animate="visible"
                >WHAT WE DO</Text>
            </TextWrapper>
        </>
    )
}

export default SubHead
