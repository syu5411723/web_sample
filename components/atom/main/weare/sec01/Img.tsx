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
const Img: VFC = () => {
    const imgV = {
        hidden: { opacity: 0, x: "7vw", y: "7vw" },
        visible: { opacity: 1, x: "0px", y: "0px", transition: { duration: 0.5, delay: 2.5 } },
    }
    const img02V = {
        hidden: { opacity: 0, x: "7vw", y: "7vw" },
        visible: { opacity: 1, x: "0px", y: "0px", transition: { duration: 0.5, delay: 2.7 } },
    }
    
    return (
        <>
                <ImgWrapper primary={true}
                    variants={imgV}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src="/images/who_01.jpg" layout="fill" objectFit="cover" />
                </ImgWrapper>
                <ImgWrapper primary={false}
                    variants={img02V}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src="/images/who_02.jpg" layout="fill" objectFit="cover" />
                </ImgWrapper>
        </>
    )
}

export default Img
