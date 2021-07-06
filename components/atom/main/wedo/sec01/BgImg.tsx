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


const BgImg: VFC<Props> = ({ width, height, src, top, left, y }) => {
    const ImgWrapper = styled(motion.div)`
        position:absolute;
        z-index: 0;
        top: ${top}%;
        left: ${left}%;
        /* z-index:10; */
    `
    const ImgInner = styled.div`
        width: ${width}vw;
        height: ${height}vw;
        position:relative;
    `
    return (
        <>
            <ImgWrapper style={{y: y}} >
                <ImgInner>
                    <Image src={src} layout="fill" objectFit="cover" />
                </ImgInner>
            </ImgWrapper>
        </>
    )
}

export default BgImg
