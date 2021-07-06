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
    delay: number
}



const Headtext:VFC<Props> = ({ text, delay  }) => {
    const textV = {
        hidden: { opacity: 0, y: "50px" },
        visible: { opacity: 1, y: "0px", transition: { type: "spring", stiffness: 100, delay: `${delay}` } }
    }

    return (
        <>
            <Text
                variants={textV}
                initial="hidden"
                animate="visible"
            // initial={{y : "-30px" }}
            // animate={{y : "0px"}}
            // transition={{duration: 0.3 , delay:0}}
            >{text}</Text>
        </>
    )
}

export default Headtext
