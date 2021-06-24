import styled from "styled-components"
import Image from "next/dist/client/image"
import { VFC } from "react"
import { motion } from "framer-motion"

type Props = {
    img: string
    size: number
    top: number
    left: number
    zIndex: number
    delay: number
    inView: any
}


const Img: VFC<Props> = ({inView, img, size, top, left, zIndex, delay }) => {
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
    const wrapperV = {
        hidden: { opacity: 0, y: "40px" },
        visible: { opacity: 1, y: "0px", transition: { type: "spring", stiffness: 100 , delay: `${delay}` } }
    }
    return (
        <>
            <ImgContainer>
                <ImgWrapper
                    variants={wrapperV}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden" }

                >
                    <Image src={img} layout="fill" objectFit="cover" />
                </ImgWrapper>
            </ImgContainer>
        </>
    )
}

export default Img
