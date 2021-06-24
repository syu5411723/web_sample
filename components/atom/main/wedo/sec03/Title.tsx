import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

const Wrapper = styled(motion.div)``
const Text = styled.p`
    color: #fff;
`
const textV = {
    hidden: {opcity: 0, y: ""},
    visible: {opacity: 1, y: "" , transition:{duration:0.4, delay: 0.3 }},
}

const Title = () => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    })
    return (
        <>
            <Wrapper
                ref={ref}
                variants={textV}
                animate={inView ? "visible" : "hidden" }
            >
                <Text>OUR SERVICES</Text>
            </Wrapper>
        </>
    )
}

export default Title
