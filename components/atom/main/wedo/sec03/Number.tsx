import styled from "styled-components"
import { motion } from "framer-motion"
import { VFC } from "react"

const Wrapper = styled(motion.div)`
    position:absolute;
    bottom: -8%;
    right:15%;
`
const Text = styled.p`
    color: #fff;
    font-size: 6vw;
`
const V = {
    hidden: {opacity: 0, y : "30px"}, 
    visible: {opacity: 1, y: "0px", transition:{duration: 0.4, delay: 1.3}},
}
type Props = {
    inView: boolean
}

const Number:VFC<Props> = ({inView}) => {
    return (
        <>
            <Wrapper
                variants={V}
                animate={inView ? "visible" : "hidden"}
            >
                <Text>01</Text>
            </Wrapper>
        </>
    )
}

export default Number
