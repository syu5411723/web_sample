import Image from "next/image"
import { motion } from "framer-motion"
import styled from "styled-components"
import { VFC } from "react"


type Props = {
    width: number
    height: number
    src: string
    top: number
    left: number
    y: any
}
const imgV = {
    hidden:{opacity: 0},
    visible: {opacity: 1, trasition: {duration: 0.5, delay: 1.2}}
    
}

const BgImg: VFC<Props> = ({ width, height, src, top, left, y }) => {
    const ImgWrapper = styled(motion.div)`
        position:absolute;
        z-index: 0;
        top: ${top}%;
        left: ${left}%;
    `
    const ImgInner = styled(motion.div)`
        width: ${width}vw;
        height: ${height}vw;
        position:relative;
    `
    return (
        <>
            <ImgWrapper style={{y: y}}>
                <ImgInner
                    variants={imgV}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src={src} layout="fill" objectFit="cover" />
                </ImgInner>
            </ImgWrapper>
        </>
    )
}

export default BgImg
