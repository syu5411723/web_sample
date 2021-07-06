import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"

import BgImg from "../../../../atom/main/wedo/sec01/BgImg"
import Png from "../../../../atom/main/wedo/sec01/Png"

const BgContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position:relative;
`

const Bg = () => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 0.07], [0, -10])
    const y2 = useTransform(scrollYProgress, [0, 0.05], [0, 100])
    const y3 = useTransform(scrollYProgress, [0, 0.08], [0, -100])
    return (
        <>
            <BgContainer>
                <BgImg src="/images/ball-blur.jpg" width={30} height={30} top={30} left={0} y={y} />
                <BgImg src="/images/ball.png" width={15} height={15} top={10} left={65} y={y2} />
                <BgImg src="/images/ball.png" width={20} height={20} top={60} left={80} y={y3} />
                <Png />
            </BgContainer>
        </>
    )
}

export default Bg
