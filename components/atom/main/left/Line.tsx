import { motion } from 'framer-motion'
import { VFC } from 'react'
import styled from "styled-components"

const LineWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
const lineV = {
    closed: { opacity: 1 },
    open: { opacity: 0, transition: { duration: 0.4, delay: 0.2 } },
}
const Line01 = styled(motion.div)`
    position:relative;
    z-index:100;
    width:1px;
    height:20px;
    margin-top: 10px;
    background-color: #fff;
`
type Props = {
    leftOpen: boolean
}


const Line: VFC<Props> = ({ leftOpen }) => {
    return (
        <>
            <LineWrapper>
                <Line01
                    variants={lineV}
                    animate={leftOpen ? "open" : "closed"}
                />
            </LineWrapper>
        </>
    )
}

export default Line
