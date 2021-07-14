import { motion } from "framer-motion"
import { VFC } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

const Wrapper = styled(motion.div)``
const Text = styled.p`
    font-size: 14px;
`

const contentV = {
    hidden : {opacity: 0, y: "100px"},
    visible: {opacity: 1 , y: "0px", transition:{duration: 0.5}}
}

type Props = {
    content: any
}
const ProfileContet:VFC<Props> = ({content}) => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true
    })
    return (
        <>
            <Wrapper
                ref={ref}
                variants={contentV}
                animate={inView ? "visible" : "hidden"}
            >
                <Text>{content}</Text>
            </Wrapper>
        </>
    )
}

export default ProfileContet
