import styled from "styled-components"
import Image from "next/dist/client/image"
import { VFC } from "react"
import { motion } from "framer-motion"

type Props = {
    img: string
    size: number
    top: number
    left: number
    zIndex : number
}

const Img: VFC<Props> = ({ img, size, top, left, zIndex }) => {
    const ImgContainer = styled.div`
        position:absolute;
        top: ${top}%;
        left: ${left}%;
        z-index: ${zIndex};
    `
    const ImgWrapper = styled(motion.div)`
        width:${size}vw;
        height: ${size}vw;
        position:relative;
    `
    return (
        <>
            <ImgContainer>
                <ImgWrapper>
                    <Image src={img} layout="fill" objectFit="cover" />
                </ImgWrapper>
            </ImgContainer>
        </>
    )
}

export default Img
