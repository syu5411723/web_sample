import { motion } from "framer-motion"
import { VFC } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

const Wrapper = styled(motion.div)``
const Text = styled.h2`
    color: #fff;
    font-family: 'Lora', serif;
    font-size: 30px;
    letter-spacing:2px;
`
type Props = {
    text: string
}
const wrapperV = {
    hidden: { opacity: 0, y: "" },
    visible: { opacity: 1, y: "0px", transtion: { duration: 0.4, delay: 1 } }
}
const HeadText: VFC<Props> = ({ text }) => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    });
    
    return (
        <>
            <Wrapper
                ref={ref}
                variants={wrapperV}
                animate={inView ? "visible" : "hidden"}
            >
                <Text>{text}</Text>
            </Wrapper>
        </>
    )
}

export default HeadText
