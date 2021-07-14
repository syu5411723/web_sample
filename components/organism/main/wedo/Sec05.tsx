import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"


import Img from "../../../atom/main/wedo/sec05/Img"
import Text from "../../../atom/main/wedo/sec05/Text"

const Container = styled.div`
    margin-top: 700px;
    position:relative;
    height:150vw;
    width:100%;
`
const ImgWrapper01 = styled(motion.div)`
    position:absolute;
    top:0;
    left: 0;
    width: 70vw;
    height: 40vw;
    z-index:1;
`
const ImgWrapper02 = styled(motion.div)`
    position:absolute;
    top:50%;
    left: 28%;
    width: 65vw;
    height: 35vw;
    z-index:1;
`
const ImgWrapper03 = styled(motion.div)`
    position:absolute;
    top:60%;
    left: 15.5%;
    width:37vw;
    height: 27vw;
    z-index:2;
`

const Sec05 = () => {
    const { scrollYProgress } = useViewportScroll();
    const y1 = useTransform(scrollYProgress, [0.6, 0.77], [0, 150])
    const y2 = useTransform(scrollYProgress, [0.72, 0.9], [0, -100])
    const y3 = useTransform(scrollYProgress, [0.75, 0.9], [0, 150])
    return (
        <>
            <Container>
                <Text />
                <ImgWrapper01
                    style={{ y: y1 }}
                >
                    <Img img="/images/what_01.jpg"/>
                </ImgWrapper01>
                <ImgWrapper02
                    style={{ y: y2 }}
                >
                    <Img img="/images/what_02.jpg" />
                </ImgWrapper02>
                <ImgWrapper03
                    style={{ y: y3 }}
                >
                    <Img img="/images/what_03.jpg" />
                </ImgWrapper03>
            </Container>
        </>
    )
}
export default Sec05
