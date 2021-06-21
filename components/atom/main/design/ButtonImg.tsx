import { motion } from "framer-motion"
import Image from "next/dist/client/image"
import { VFC } from "react"
import styled from "styled-components"

const ImgWrapper = styled(motion.div)`
    position:absolute;
    z-index:1;
    top:0;
    height:100%;
    width:100%;
`
type Props = {
    isOpen : boolean
}

const ButtonImg:VFC<Props> = ({isOpen}) => {
    return (
        <>
            <ImgWrapper>
                {isOpen ? (
                        <Image src="/images/shadow_lg_active.png" layout="fill" objectFit="cover" />
                ) : (
                    <Image src="/images/shadow_lg.png" layout="fill" objectFit="cover" />
                )}
            </ImgWrapper>
        </>
    )
}

export default ButtonImg
