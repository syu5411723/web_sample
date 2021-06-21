import styled from "styled-components"
import Image from "next/image"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import { VFC } from "react"


const Container = styled.div`
    width:100%;
    height: 550px;
    overflow:hidden;
    margin-top: 50px;
`
const Sec05Container = styled.div`
    width:100%;
    height: 550px;
    overflow:hidden;
    margin-top: -100px;
`
const ImgWrapper = styled(motion.div)`
    width: 100vw;
    height: 500px;
    position:relative;
`
type Props = {
    primary: boolean
}

const ImgSec: VFC<Props> = ({ primary }) => {
    const { scrollY } = useViewportScroll();
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollY, [750, 1700], [0, -100])
    const y2 = useTransform(scrollYProgress, [0.5, 1], [0, -100])
    return (
        <>

            {primary ? (
                <Container>
                    <ImgWrapper
                        style={{ y: y }}
                    >
                        <Image src="/images/who_03.jpg" objectFit="cover" layout="fill" />
                    </ImgWrapper>
                </Container>
            ) : (
                <Sec05Container>
                    <ImgWrapper
                        style={{ y: y2 }}
                    >
                        <Image src="/images/who_05.jpg" objectFit="cover" layout="fill" />
                    </ImgWrapper>
                </Sec05Container>
            )}


        </>
    )
}
export default ImgSec

