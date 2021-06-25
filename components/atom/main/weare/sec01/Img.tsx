import { motion } from "framer-motion"
import Image from "next/image"
import { VFC } from "react"
import styled from "styled-components"

type Style = {
    primary: boolean
}

const ImgWrapper = styled(motion.div) <Style>`
    position: absolute;
    z-index: ${({ primary }) => primary ? "2" : "3"};
    top: ${({ primary }) => primary ? "0" : "55%"};
    left:${({ primary }) => primary ? "45%" : "15%"};
    width:${({ primary }) => primary ? "42vw" : "35vw"} ;
    height:${({ primary }) => primary ? "60vw" : "40vw"};
`


type Props = {
    img: string
    primary: boolean
    delay: number
}

const Img: VFC<Props> = ({ primary, img, delay }) => {
    const imgV = {
        hidden: { opacity: 0, x: "7vw", y: "7vw" },
        visible: { opacity: 1, x: "0px", y: "0px", transition: { duration: 0.5, delay: `${delay}` } },
    }
    
    return (
        <>
                <ImgWrapper primary={primary}
                    variants={imgV}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src={img} layout="fill" objectFit="cover" />
                </ImgWrapper>
        </>
    )
}

export default Img
