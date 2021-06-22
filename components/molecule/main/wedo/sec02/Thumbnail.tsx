import { motion } from "framer-motion"
import styled from "styled-components"

import { Title, HeadText } from "../../../../atom/main/wedo/sec03/index"


const Container = styled(motion.div)`
    display:flex;
    justify-content:center;
`
const TitleWrapper = styled.div`
    margin-bottom: 100px;
`
const ContetntWrapper = styled.div`
    position:absolute;
    top:15%;
    left:10.5%;
`

const Thumbnail = () => {
    return (
        <>
            <Container>
                <TitleWrapper>
                    <Title />
                </TitleWrapper>
                <ContetntWrapper>
                    <HeadText text="SYNERGY EFFECT OF" />
                    <HeadText text="ANALOG AND" />
                    <HeadText text="DIGITAL" />
                </ContetntWrapper>
            </Container>
        </>
    )
}

export default Thumbnail
