import { motion } from "framer-motion"
import { VFC } from "react"
import styled from "styled-components"

const Container = styled(motion.div)`
    /* background: linear-gradient(90deg, rgba(73,115,230,1) 0%, rgba(64,134,200,1) 53%, rgba(0,212,255,1) 100%); */
    background: linear-gradient(to right, #1A20FF, #83FFD6);
    width: 100%;
    height: 100%;
    position:absolute; 
    top:0;
    left:0;
    z-index: 2;
`
const containerV = {
    closed : {x: "100%", transition:{duration:0.4}},
    open: {x: "0%",transition:{duration: 0.4} }
}
type Props = {
    isOpen: boolean
}

const ButtonBg:VFC<Props> = ({isOpen}) => {
    return (
        <>
            <Container 
                variants={containerV}
                animate={isOpen ? "open" : "closed"}
            />
        </>
    )
}

export default ButtonBg
