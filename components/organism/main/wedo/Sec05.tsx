import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"


import Img from "../../../atom/main/wedo/sec05/Img"
import Text from "../../../atom/main/wedo/sec05/Text"
import ImgSec from "../../../atom/main/design/ImgSec"

const Container = styled.div`
    margin-top: 400px;
    position:relative;
    height:150vw;
    display:flex;
    align-items:center;
`
type Style = {
    top: number

}
const ImgWrapper01 = styled(motion.div)`
    width:70vw;
    height: 40vw;
    position:absolute;
    top: 0;
    left: 15%;
`
const ImgWrapper02 = styled(motion.div)`
    width:60vw;
    height: 35vw;
    position:absolute;
    top: 50%;
    left: 25%;
`
const ImgWrapper03 = styled(motion.div)`
    width:40vw;
    height: 30vw;
    position:absolute;
    top: 65%;
    left: 12.5%;
`


const Sec05 = () => {
    const { scrollYProgress } = useViewportScroll();
    const y1 = useTransform(scrollYProgress, [0.5, 0.8], [0, -100])
    const y2 = useTransform(scrollYProgress, [0.6, 0.9], [0, 100])
    const y3 = useTransform(scrollYProgress, [0.6, 0.9], [0, -100])

    return (
        <>
            <Container>
                <Text />
                <ImgWrapper01
                    style={{ y: y1 }}
                >
                    <ImgSec img="/images/what_02.jpg" page={true} primary={true} />
                </ImgWrapper01>
                <ImgWrapper02
                    style={{ y: y2 }}
                >
                    <ImgSec img="/images/what_03.jpg" page={true} primary={true} />
                </ImgWrapper02>
                <ImgWrapper03
                    style={{ y: y3 }}
                >
                    <ImgSec img="/images/what_04.jpg" page={true} primary={true} />
                </ImgWrapper03>
            </Container>

        </>
    )
}
export default Sec05
