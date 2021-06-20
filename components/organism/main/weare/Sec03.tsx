import styled from "styled-components"
import Image from "next/image"
import { motion, useTransform, useViewportScroll } from "framer-motion"


const Container = styled.div`
    width:100%;
    height: 550px;
    overflow:hidden;
    margin-top: 50px;
`
const ImgWrapper = styled(motion.div)`
    width: 100vw;
    height: 500px;
    position:relative;
`


const Sec03 = () => {
    const { scrollY } = useViewportScroll();
    const y = useTransform(scrollY, [750, 1400], [0, -150])
    return (
        <>
            <Container>
                <ImgWrapper
                    style={{ y: y }}
                >
                    <Image src="/images/who_03.jpg" objectFit="cover" layout="fill" />
                </ImgWrapper>
            </Container>
        </>
    )
}

export default Sec03
