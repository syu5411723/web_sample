import styled from "styled-components"
import { motion } from "framer-motion"
import { VFC } from "react"

const Text02 = styled(motion.h2) `
    font-size: 40px;
    letter-spacing: 30px;
    color:#fff;
    margin-bottom: 40px;
`


type Props = {
    text : string
    delay: number
}



const Headtext = ({text, delay}) => {
    const textV = {
        hidden:{y : "-30px"},
        visible:{y: "0px", transition:{duration:0.3, delay:0.5}}
    }

    return (
        <>
            <Text02
                initial={{y : "-30px" }}
                animate={{y : "0px"}}
                transition={{duration: 0.3 , delay:0}}
            >{text}</Text02>
        </>
    )
}

export default Headtext
