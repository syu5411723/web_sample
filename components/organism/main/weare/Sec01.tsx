import { motion } from "framer-motion"
import styled from "styled-components"

import Bg from "../../../atom/main/weare/sec01/Bg"
import Img from "../../../atom/main/weare/sec01/Img"
import Img02 from "../../../atom/main/weare/sec01/Img02"
import Text01 from "../../../atom/main/weare/sec01/Text01"
import Text02 from "../../../atom/main/weare/sec01/Text02"

const Container = styled.div`
    height: 800px;
    position : relative;
    background-color: #fff;
`
const TextWrapper = styled(motion.div)`
    position : absolute;
    width: 500px;
    line-height: 30px;
    top: 130px;
    left: 100px;
    z-index: 5;
`
const ImgWrapper = styled.div`

`



const Sec01 = () => {
    return (
        <>
            <Container>
                <Bg />
                <TextWrapper>
                    <Text01 />
                    <Text02 text="WE ARE" span={false}/>
                    <Text02 text="SUPER CROWDS" span={true}/>
                </TextWrapper>
                <Img />
                <Img02 />
            </Container>
        </>
    )
}

export default Sec01
