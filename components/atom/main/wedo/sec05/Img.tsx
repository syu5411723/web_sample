import styled from "styled-components"
import { motion } from "framer-motion"

import Image from "next/image"


const ImgWrapper = styled(motion.div)`
`

type Props = {
    img: string
}

const Img = ({ img  }) => {


        return (
            <>
                    <ImgWrapper>
                        <Image src={img} objectFit="cover" layout="fill" />
                    </ImgWrapper>
            </>
        )

}
export default Img
