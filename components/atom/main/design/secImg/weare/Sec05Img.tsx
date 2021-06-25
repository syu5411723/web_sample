import Image from "next/image"
import { useTransform, useViewportScroll } from "framer-motion"
import { VFC } from "react"

import {Container, ImgWrapper,  } from  "../style"


type Props = {
    img: string
}

const Sec05Img:VFC<Props> = ({ img }) => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0.27, 0.415], [0, -80])
        return (
            <>
                <Container>
                    <ImgWrapper
                        style={{ y: y }}
                    >
                        <Image src={img} objectFit="cover" layout="fill" />
                    </ImgWrapper>
                </Container>
            </>
        )
}
export default Sec05Img
