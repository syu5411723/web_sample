import styled from "styled-components"
import Image from "next/dist/client/image"
import { VFC } from "react"
import { motion, useTransform, useViewportScroll } from "framer-motion"


type Props = {
    img: string
    top: number
    left: number
    zIndex: number
    height: number
    width: number
    // y: any
}

export const Container = styled.div`
    width:100%;
    height: 550px;
    overflow:hidden;
    margin-top: 50px;
`
export const Sec05Container = styled.div`
    width:100%;
    height: 550px;
    overflow:hidden;
    margin-top: -100px;
`
export const ImgWrapper = styled(motion.div)`
    width: 100vw;
    height: 500px;
    position:relative;
`

const Img: VFC<Props> = ({ img, top, left, zIndex, height, width }) => {
    const ImgWrapper = styled(motion.div)`
        position:absolute;
        top: ${top}%;
        left: ${left}%;
        z-index: ${zIndex};
    `
    const ImgInner = styled(motion.div)`
        width: ${width}vw;
        height: ${height}vw;
        position:relative;
    `

    return (
        <>
            <ImgWrapper>
                <ImgInner>
                    <Image src={img} layout="fill" objectFit="cover" />
                </ImgInner>
            </ImgWrapper>
                        <>
            </>
        </>
    )
}

export default Img
