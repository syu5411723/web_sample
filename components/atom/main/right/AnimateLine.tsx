import { motion } from 'framer-motion'
import React from 'react'
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

const AnimateLine = ({top, bottom ,isOpen}) => {
    const Line = styled(motion.div)`
        width:1px;
        height:1px;
        margin-top: ${top};
        margin-bottom: ${bottom};
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

