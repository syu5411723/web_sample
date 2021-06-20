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
    open: { opacity: 0, transition: { duration: 0.4 } },
}
type Props = {
    isOpen : boolean
}

const Line:VFC<Props> = ({ isOpen }) => {
    const Line01 = styled(motion.div)`
        width:1px;
        height:20px;
        margin-bottom: 10px;
        background-color: rgba(1,1,1, 0.8);
    `
    return (
        <>
            <LineWrapper>
                <Line01
                    variants={lineV}
                    animate={isOpen ? "open" : "closed"}
                />
            </LineWrapper>
        </>
    )
}

export default Line
