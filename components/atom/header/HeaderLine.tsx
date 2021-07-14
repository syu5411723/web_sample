import { AnimatePresence, motion } from "framer-motion"
import styled from "styled-components"
import React, { VFC } from "react"

const Wrapper = styled.div``
const Line = styled(motion.div)`
    height: 1px;
    mix-blend-mode:difference;
    background-color: #fff;
    width:0;
`
const lineV = {
    enter: { width: ["0%", "0%", "0%", "0%"], x: ["0%", "0%", "0%", "0%"] },
    open: {
        width: ["0%", "100%", "100%", "100%"],
        x: ["0%", "0%", "0%", "100%"],
        trnsition: {
            duration: 0.7,
            times: [0, 0.33, 0.66, 1],
            ease: [],
        }
    },
}
type Props = {
    hover: boolean
}

const HeaderLine: VFC<Props> = ({ hover }) => {
    return (
        <>
            <Wrapper>
                <Line
                    variants={lineV}
                    initial="enter"
                    animate={hover ? "open" : "enter"}
                />
            </Wrapper>
        </>
    )
}

export default HeaderLine
