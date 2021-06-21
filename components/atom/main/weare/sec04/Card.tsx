import { motion } from "framer-motion"
import styled from "styled-components"
import Image from "next/dist/client/image"

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

type Prpos = {
    img: string
}

const Card = ({ img }) => {
    return (
        <>
            <CardWrapper>
                <Image src={img} layout="fill" />
            </CardWrapper>
        </>
    )
}

export default Card
