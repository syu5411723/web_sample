import Image from "next/image"
import { useTransform, useViewportScroll } from "framer-motion"
import { VFC } from "react"

import {Container, ImgWrapper,  } from  "../style"


type Props = {
    page: boolean
    img: string
    primary: boolean
}

const Sec04Img:VFC<Props> = ({ page, primary, img }) => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0.39, 0.6], [0, -80])
    if (page === false && primary ) {
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
export default Sec04Img
