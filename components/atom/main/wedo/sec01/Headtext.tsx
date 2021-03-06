import styled from "styled-components"
import { motion } from "framer-motion"
import { VFC } from "react"

const Text = styled(motion.h2)`
    font-size: 40px;
    letter-spacing: 30px;
    color:#fff;
    height:100%;
`


type Props = {
    text: string
}

const Headtext:VFC<Props> = ({ text }) => {
    const textV = {
        hidden: { opacity: 0, y: "50px", x: "-10px" },
        visible: { opacity: 1, y: "0px", x: "0px", transition: { duration: 1, ease: "easeOut"}}
    }

    return (
        <>
            <Text
                variants={textV}
                // initial="hidden"
                // animate="visible"
            >{text}</Text>
        </>
    )
}

export default Headtext
