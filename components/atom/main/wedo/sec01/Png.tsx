import styled, { keyframes } from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

const PngInner = styled(motion.div)`
    width: 100%;
    height: 100%;
`

const PngAnimation = keyframes`
to {
    transform: translateX(0)
}
from {
    transform: translateX(-91.66667%)
}
`
const PngImg = styled.div`
    width:1200%;
    height:100%;
    background: url("/images/motion_what_motif.png")no-repeat;
    animation: ${PngAnimation} infinite 10s steps(11);
    background-size:100% 100%;
    position: absolute;
    z-index:20;
    top: 0;
    left: 0;
`
const PngWrapper = styled(motion.div)`
    width:70vw;
    height: 90vh;
    margin:0 auto;
    position:relative;
    overflow:hidden;
`
const wrapperV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, delay: 1.2 } }
}

const Png = () => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 0.13], [0,50])
    // const opacity = useTransform(scrollYProgress, [0.09, 0.091], [1, 0]) 

    return (
        <>
            <PngWrapper
                // variants={wrapperV}
                // initial="hidden"
                // animate="visible"
                style={{y: y }}
            >
                <PngInner>
                    <PngImg/>
                </PngInner>
            </PngWrapper>
        </>
    )
}

export default Png
