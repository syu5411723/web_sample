import Image from "next/image"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"
import { VFC } from "react"

type Style = {
    img: string
}

const Inner = styled(motion.div) <Style>`
    position:relative; 
    width: ${({ img }) =>
        img === "01" && "30vw" ||
        img === "02" && "15vw" ||
        img === "03" && "25vw"
    };
    height: ${({ img }) =>
        img === "01" && "30vw" ||
        img === "02" && "15vw" ||
        img === "03" && "25vw"
    };
`
const ImgWrapper = styled(motion.div) <Style>`
    position:absolute;
    top: ${({ img }) =>
        img === "01" && "30%" ||
        img === "02" && "10%" ||
        img === "03" && "60%"
    };
    left: ${({ img }) =>
        img === "01" && "0%" ||
        img === "02" && "65%" ||
        img === "03" && "80%"
    };
`
type Props = {
    src: string
    y: any
    img: string
}
const imgV = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, trasition: { duration: 0.5, delay: 1.2 } }
}

const BgImg: VFC<Props> = ({ src, y, img }) => {
    const { scrollYProgress } = useViewportScroll();
    const opacity = useTransform(scrollYProgress, [0.08, 0.081], [1, 0]) 
    return (
        <>
            <ImgWrapper style={{ y: y , opacity: opacity }} img={img}
                variants={imgV}
                initial="hidden"
                animate="visible"
            >
                <Inner img={img} >
                    <Image src={src} layout="fill" objectFit="cover" />
                </Inner>
            </ImgWrapper>
        </>
    )
}

export default BgImg
