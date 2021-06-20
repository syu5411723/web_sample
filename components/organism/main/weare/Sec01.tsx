import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"

import Bg from "../../../atom/main/weare/sec01/Bg"
import Img from "../../../atom/main/weare/sec01/Img"
import Img02 from "../../../atom/main/weare/sec01/Img02"
import MainThumb from "../../../molecule/main/design/MainThumb"


const Container = styled.div`
    height: 800px;
    position : relative;
    background-color: #fff;
`
const ThumbWrapper = styled(motion.div)`
    position:absolute;
    z-index:5;
    top: 130px;
    left: 100px;
`
const ImgWrapper = styled.div`

`



const Sec01 = () => {
    const { scrollY } = useViewportScroll();
    const y = useTransform(scrollY, [10, 400], [0, 50])
    return (
        <>
            <Container>
                <Bg />
                <ThumbWrapper
                    style={{ y: y }}
                >
                    <MainThumb text01="WHO WE ARE" text02="WE ARE" text03="SUPER CROWDS" />
                </ThumbWrapper>
                <Img />
                <Img02 />
            </Container>
        </>
    )
}

export default Sec01
