import { motion } from "framer-motion"
import styled from "styled-components"
import Image from "next/dist/client/image"

const CardWrapper = styled(motion.div)``

type Prpos = {
    img : string
}

const Card = ({img}) => {
    return (
        <>
            <CardWrapper>
                <Image src={img} width={200} height={200} />
            </CardWrapper>
        </>
    )
}

export default Card
