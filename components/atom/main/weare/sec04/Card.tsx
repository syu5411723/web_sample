import { motion } from "framer-motion"
import styled from "styled-components"
import Image from "next/dist/client/image"
import { useInView } from "react-intersection-observer"

const CardWrapper = styled(motion.div)`
    position :absolute;
    top: 0;
    left: 30%;
    z-index:1;
    width:40vw;
    height:43vw;
    border-radius: 3px;
    background: #d6d6d6;
    box-shadow:  7px 7px 27px #787878, -7px -7px 27px #ffffff;

`
const ImgWrapper = styled(motion.div)`
    width:40vw;
    height:43vw;
    position:relative;
`
const cardV = {
    closed: { scale: 0, originY: "43vw", originX: "0px", x: "-50px", y: "50px"  },
    open: { scale: 1, originY: "43vw", originX: "0px",x: 0, y: 0, transition: { duration: 0.4 } }
}
const imgV = {
    closed: { x: "50px", y: "50px", opacity: 0 },
    open: { x: "0", y: "0", opacity: 1, originY: 0, originX: 0, transition: { duration: 0.5, delay: 0.3 } }
}
type Prpos = {
    img: string
}

const Card = ({ img }) => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    })
    return (
        <>
            <CardWrapper
                ref={ref}
                variants={cardV}
                animate={inView ? "open" : "closed"}
            >
                    <ImgWrapper
                        variants={imgV}
                        animate={inView ? "open" : "closed"}
                    >
                        <Image src={img} layout="fill" objectFit="cover" />
                    </ImgWrapper>
            </CardWrapper>
        </>
    )
}

export default Card
