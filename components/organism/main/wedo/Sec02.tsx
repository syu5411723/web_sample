import { motion } from "framer-motion"
import styled from "styled-components"
import Text from "../../../atom/main/wedo/sec02/Text"

const Container = styled.div`
    width:100%;
`
const Inner = styled(motion.div)`
    width: 87vw;
    margin: 0 auto;
    padding-bottom: 100px;
`
const textV = {
    hidden: {opacity: 0 , x: "-50px"},
    visible: {opacity: 1, x: "0px", transition: {duration: 0.5, delay: 2.5}}
}



const sec02 = () => {
    return (
        <>
            <Container>
                <Inner
                    variants={textV}
                    initial="hidden"
                    animate="visible"
                >
                    <Text content="私達が手掛けるプロジェクトはWebデザイン、UI・UX設計、CI・VIデザイン、グラフィックデザイン、パッケージデザインからプロダクトデザインまで多種多様です。" />
                    <Text content="手段ありきではなく、目的から逆算してデザインできるよう、コンセプトメイキング、グラフィック、ハードウェアからWebまで全てを一貫して手掛けます。一貫したコンセプトのもと、全てをデザイン・ブランディングできることが私達の最大の強みです。" />
                </Inner>
            </Container>
        </>
    )
}

export default sec02
