import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``
const Text = styled(motion.h3)`
    font-size: 14px;
    letter-spacing:5px;
`

const textV = {
    closed: {color: "#000"},
    open: {color: "#fff"},
}

const SideText = ({text, isOpen}) => {
    return (
        <>
                <Wrapper>
                    <Text
                        variants={textV}
                        animate={isOpen ? "open" : "closed"}
                    >{text}</Text>
                </Wrapper>
        </>
    )
}

export default SideText
