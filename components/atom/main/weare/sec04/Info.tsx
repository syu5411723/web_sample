import { motion, useViewportScroll, useTransform } from "framer-motion"
import { VFC } from "react"
import styled from "styled-components"

const Wrapper = styled(motion.div)`
    position:absolute;
    top:70%;
    right:25%;
    z-index:1;
`
const InfoText = styled.p`
    font-size: 20px;
`

type Props = {
    info
}

const Info:VFC<Props> = ({info}) => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0.3, 0.4], [0, -100])
    return (
        <>
            <Wrapper
                style={{y:y}}
            >
                <InfoText>{info}</InfoText>
            </Wrapper>
        </>
    )
}

export default Info
