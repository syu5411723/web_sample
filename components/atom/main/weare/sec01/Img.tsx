import { motion } from "framer-motion"
import Image from "next/image"
import styled from "styled-components"

const ImgWrapper = styled.div`
    position: absolute;
    z-index:2;
    top: 0;
    right:100px;
`


const Img = () => {
    return (
        <>
            <ImgWrapper>
                <Image src="/images/who_01.jpg" height={600} width={400} />
            </ImgWrapper>
        </>
    )
}

export default Img
