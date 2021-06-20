﻿import { motion } from 'framer-motion'
import { VFC } from 'react'
import styled from "styled-components"

const LineWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    position: fixed;
    top: 51%;
    right: 80px;
    z-index: 2;
`
const lineV = {
    closed: {width: "0px"},
    open: {width: "150px", transition: {duration:0.4}},
}
type Props = {
    isOpen : boolean
}

const AnimateLine:VFC<Props> = ({isOpen}) => {
    const Line = styled(motion.div)`
        width:1px;
        height:1px;
        margin-top: 20px;
        background-color: gray;

    `
    return (
        <>
            <LineWrapper>
                <Line
                    variants={lineV}
                    animate={isOpen ? "open" : "closed"}
                />
            </LineWrapper>
        </>
    )
}

export default AnimateLine

