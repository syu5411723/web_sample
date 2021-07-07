import { motion, useTransform, useViewportScroll } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

import Arrow from "../../../molecule/main/wedo/sec02/Arrow"
import Text from "../../../atom/main/wedo/sec02/Text"

const Container = styled.div`
    width:100%;
    margin-top: 500px;
    position:relative;
`
const Inner = styled(motion.div)`
    width: 85vw;
    margin: 0 auto;
    padding-bottom: 100px;
`
const textV = {
    hidden: {opacity: 0 , y: "-80px"},
    visible: {opacity: 1, y: "0px", transition: {duration: 0.5}}
}



const sec02 = () => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    })
    return (
        <>
            <Container>
                <Arrow />
                <Inner
                    ref={ref}
                    variants={textV}
                    animate={inView ? "visible" : "hidden"}
                >
                    <Text content="私達が手掛けるプロジェクトはWebデザイン、UI・UX設計、CI・VIデザイン、グラフィックデザイン、パッケージデザインからプロダクトデザインまで多種多様です。" />
                    <Text content="手段ありきではなく、目的から逆算してデザインできるよう、コンセプトメイキング、グラフィック、ハードウェアからWebまで全てを一貫して手掛けます。一貫したコンセプトのもと、全てをデザイン・ブランディングできることが私達の最大の強みです。" />
                </Inner>
            </Container>
        </>
    )
}

export default sec02
