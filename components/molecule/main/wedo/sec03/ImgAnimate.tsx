

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import { Img } from "../../../../atom/main/wedo/sec03/index"

const ImgWrapper = styled.div`

`



const ImgAnimate = ({ delay, inView, img, size, top, left, zIndex }) => {
    return (
        <>
            <ImgWrapper>
                <Img img={img} size={size} top={top} left={left} zIndex={zIndex} delay={delay} inView={inView} />
            </ImgWrapper>
        </>
    )
}

export default ImgAnimate
