import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"


import Img from "../../../atom/main/wedo/sec05/Img"
import Text from "../../../atom/main/wedo/sec05/Text"

const Container = styled.div`
    margin-top: 300px;
    position:relative;
    height:150vw;
    display:flex;
    align-items:center;
`
type Position = {
    primary: boolean
}

export const ImgWrapper = styled(motion.div)<Position>`
    position:absolute;
    ${primary}}{

    }
    top:0;
    left: 0;
`

type Style = {
    top: number

}

const Sec05 = () => {
    const { scrollYProgress } = useViewportScroll();
    const y1 = useTransform(scrollYProgress, [0.5, 0.8], [0, -100])
    const y2 = useTransform(scrollYProgress, [0.6, 0.9], [0, -100])
    const y3 = useTransform(scrollYProgress, [0.6, 0.9], [0, 100])

    return (
        <>
            <Container>
                <Text />
                <ImgWrapper primary={false}
                    style={{ y: y1 }}
                >
                    <Img img="/images/what_01.jpg" h={40} w={75} />
                </ImgWrapper>
                <ImgWrapper primary={false}
                    style={{ y: y2 }}
                >
                    <Img img="/images/what_02.jpg" h={35} w={65} />
                </ImgWrapper>
                <ImgWrapper primary={false} 
                    style={{ y: y3 }}
                >
                    <Img img="/images/what_03.jpg" h={27} w={37} />
                </ImgWrapper>
            </Container>

        </>
    )
}
export default Sec05
