import { motion } from "framer-motion"
import Image from "next/dist/client/image"
import styled from "styled-components"

const Wrapper = styled(motion.div)`
    position:absolute;
    z-index:3;
    top:370px;
    left: 100px;
`

const Img02 = () => {
    return (
        <>
            <Wrapper>
                <Image src="/images/who_02.jpg" width={300} height={380} />
            </Wrapper>
        </>
    )
}

export default Img02
