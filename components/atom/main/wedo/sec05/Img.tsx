import styled from "styled-components"
import { motion } from "framer-motion"

import Image from "next/image"


type Props = {
    img: string
}

const Img = ({ img  }) => {
    const ImgWrapper = styled(motion.div)`
    `

        return (
            <>
                    <ImgWrapper
                    >
                        <Image src={img} objectFit="cover" layout="fill" />
                    </ImgWrapper>
            </>
        )

}
export default Img
