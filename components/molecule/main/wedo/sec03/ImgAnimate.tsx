

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import { Img } from "../../../../atom/main/wedo/sec03/index"

const ImgWrapper = styled.div``


const ImgAnimate = ({ inView }) => {
    return (
        <>
            <ImgWrapper>
                <Img inView={inView}  />
            </ImgWrapper>
        </>
    )
}

export default ImgAnimate
