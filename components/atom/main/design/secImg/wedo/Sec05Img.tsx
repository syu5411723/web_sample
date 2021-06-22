import Image from "next/image"
import { useTransform, useViewportScroll } from "framer-motion"
import { VFC } from "react"

import {Sec05Container, ImgWrapper,  } from  "../style"


type Props = {
    page: boolean
    img: string
    primary: boolean
}

const Sec05Img:VFC<Props> = ({ page, primary, img }) => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0.8, 0.95], [0, -100])
    if (page && primary === false ) {
        return (
            <>
                <Sec05Container>
                    <ImgWrapper
                        style={{ y: y }}
                    >
                        <Image src={img} objectFit="cover" layout="fill" />
                    </ImgWrapper>
                </Sec05Container>
            </>
        )
    } else {
        return null
    }
}
export default Sec05Img