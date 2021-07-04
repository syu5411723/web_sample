import { motion } from "framer-motion"
import { VFC } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

const Wrapper = styled(motion.div)``
const Text = styled.p`
    color: #fff;
`

const textV = {
    hidden: { opacity: 0, y: "-100px" },
    visible: { opacity: 1, y: "0px", transition: { duration: 0.5} },
}
type Props = {
    text: string
}
const Title: VFC<Props> = ({ text }) => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    })
    return (
        <>
                <Wrapper
                    ref={ref}
                    variants={textV}
                    animate={inView ? "visible" : "hidden"}
                >
                    <Text>{text}</Text>
                </Wrapper>
        </>
    )
}

export default Title
