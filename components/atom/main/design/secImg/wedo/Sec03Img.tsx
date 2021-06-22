import Image from "next/image"
import { useTransform, useViewportScroll } from "framer-motion"
import { VFC } from "react"

import {Container, ImgWrapper,  } from  "../style"


type Props = {
    page: boolean
    img: string
    primary: boolean
}

const Sec03Img:VFC<Props> = ({ page, primary, img }) => {
    const { scrollY } = useViewportScroll();
    const y = useTransform(scrollY, [750, 1700], [0, -100])
    if (page && primary) {
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
export default Sec03Img
