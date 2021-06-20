import { motion } from 'framer-motion'
import { VFC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``
const Text = styled(motion.h3)`
    font-size: 14px;
    letter-spacing:5px;
`
type Props = {
    leftOpen: boolean
    color: string
}

const SideText:VFC<Props> = ({leftOpen, color}) => {
    const textV = {
        closed: {color: `${color}`},
        open: {color: "#000"},
    }
    
    return (
        <>
                <Wrapper>
                    <Text
                        variants={textV}
                        animate={leftOpen ? "open" : "closed" }
                    >WHO WE ARE</Text>
                </Wrapper>
        </>
    )
}

export default SideText