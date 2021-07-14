import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"
import Text from "../../../atom/main/weare/sec02/Text"

const Container = styled.div`
    width:100%;
    height:300px;
    margin-top: 15vw;
    margin-bottom: 10vw;
`
const Inner = styled(motion.div)`
    width:70%;
    height:300px;
    margin: 0 auto;
`

const Sec02 = () => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0.04, 0.18], [0, 150])
    return (
        <>
            <Container>
                <Inner style={{ y: y }}>
                    <Text LH={0} content="Super Crowdsは多種多様な個性とスキルを持った集団でモノづくりに取り組むクリエイティブ・ファームです。" />
                    <Text LH={30} content="1人1人の個性やスキルを活かしながら、自分とは異なる存在、異なる思考、異なる手段を掛けあわせ、個人の想像の枠を超えたアウトプットを可能にするチームワークが私達の強み。" />
                    <Text LH={30} content="1人1人の個性やスキルを活かしながら、自分とは異なる存在、異なる思考、異なる手段を掛けあわせ、個人の想像の枠を超えたアウトプットを可能にするチームワークが私達の強み。" />
                </Inner>
            </Container>

        </>
    )
}

export default Sec02
