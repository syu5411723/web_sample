import styled from "styled-components"
import Image from "next/dist/client/image"
import { VFC } from "react"
import { motion } from "framer-motion"

type Props = {
    inView: any
}

type Style = {
    img: string
}

const ImgContainer = styled(motion.div)<Style>`
position:absolute;
top: ${({img}) => 
        img === "01" && "30%" ||
        img === "02" && "40%" ||
        img === "03" && "30%"
    };
left: ${({img}) => 
        img === "01" && "30%" ||
        img === "02" && "40%" ||
        img === "03" && "52%"
    };
z-index: ${({img}) => 
        img === "01" && "1" ||
        img === "02" && "2" ||
        img === "03" && "1"
    };
`
const ImgWrapper = styled(motion.div)<Style>`
width:${({img}) => 
        img === "01" && "18vw" ||
        img === "02" && "20vw" ||
        img === "03" && "30vw"
    };
height:${({img}) => 
        img === "01" && "18vw" ||
        img === "02" && "20vw" ||
        img === "03" && "30vw"
    };
position:relative;
`



const Img: VFC<Props> = ({inView}) => {
    const animateV = {
        hidden: {y: 0},
        visible: {y: [0, 100, 0], transition: {duration: 4, loop: Infinity }}
    }
    const animate02V = {
        hidden: {y: 0},
        visible: {y: [0, 100, 0], transition: {duration: 4, loop: Infinity , delay: 1 }}
    }
    const animate03V = {
        hidden: {y: 0},
        visible: {y: [0, 100, 0], transition: {duration: 4, loop: Infinity, delay: 2 }}
    }
    const wrapperV = {
        hidden: { opacity: 0, y: "40px" },
        visible: { opacity: 1, y: "0px", transition: { type: "spring", stiffness: 100 , delay: 1.2 } }
    }
    const wrapper02V = {
        hidden: { opacity: 0, y: "40px" },
        visible: { opacity: 1, y: "0px", transition: { type: "spring", stiffness: 100 , delay: 1.3 } }
    }
    const wrapper03V = {
        hidden: { opacity: 0, y: "40px" },
        visible: { opacity: 1, y: "0px", transition: { type: "spring", stiffness: 100 , delay: 1.4 } }
    }
    return (
        <>
            <ImgContainer
                img="01"
                variants={animateV}
                animate={inView ? "visible" : "hidden"}
            >
                <ImgWrapper
                    img="01"
                    variants={wrapperV}
                    animate={inView ? "visible" : "hidden" }
                >
                    <Image src="/images/brand_1.png" layout="fill" objectFit="cover" />
                </ImgWrapper>
            </ImgContainer>
            <ImgContainer
                img="02"
                variants={animate02V}
                animate={inView ? "visible" : "hidden"}
            >
                <ImgWrapper
                    img="02"
                    variants={wrapper02V}
                    animate={inView ? "visible" : "hidden" }
                >
                    <Image src="/images/brand_2.png" layout="fill" objectFit="cover" />
                </ImgWrapper>
            </ImgContainer>
            <ImgContainer
                img="03"
                variants={animate03V}
                animate={inView ? "visible" : "hidden"}
            >
                <ImgWrapper
                    img="03"
                    variants={wrapper03V}
                    animate={inView ? "visible" : "hidden" }
                >
                    <Image src="/images/brand_3.png" layout="fill" objectFit="cover" />
                </ImgWrapper>
            </ImgContainer>
        </>
    )
}

export default Img
