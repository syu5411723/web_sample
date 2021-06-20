import { motion } from 'framer-motion'
import React, { VFC } from 'react'
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
type Props = {
    isOpen: boolean
}

const SideText:VFC<Props> = ({isOpen}) => {
    return (
        <>
                <Wrapper>
                    <Text
                        variants={textV}
                        animate={isOpen ? "open" : "closed"}
                    >WHAT WE DO</Text>
                </Wrapper>
        </>
    )
}

export default SideText
