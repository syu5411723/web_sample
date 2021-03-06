import Image from "next/image"
import { useTransform, useViewportScroll } from "framer-motion"
import { VFC } from "react"

import {Container, ImgWrapper,  } from  "../style"


type Props = {
    page: boolean
    img: string
    primary: boolean
}

const Sec05Img:VFC<Props> = ({ page, primary, img }) => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0.85, 1], [0, -100])
    if (page && primary === false ) {
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
    } else {
        return null
    }
}
export default Sec05Img