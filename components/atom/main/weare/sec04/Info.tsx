import { motion } from "framer-motion"
import { VFC } from "react"
import styled from "styled-components"

const Wrapper = styled(motion.div)`
    position:absolute;
    top:70%;
    right:25%;
`
const InfoText = styled.p`
    font-size: 20px;
`

type Props = {
    info
}

const Info:VFC<Props> = ({info}) => {
    return (
        <>
            <Wrapper>
                <InfoText>{info}</InfoText>
            </Wrapper>
        </>
    )
}

export default Info
