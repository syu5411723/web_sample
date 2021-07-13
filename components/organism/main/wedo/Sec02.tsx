﻿import { motion, useTransform, useViewportScroll } from "framer-motion"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

import { Bg } from "../../../atom/main/wedo/sec01"
import Arrow from "../../../molecule/main/wedo/sec02/Arrow"
import Text from "../../../atom/main/wedo/sec02/Text"

const Container = styled.div`
    /* width:100%;
    margin-top: 500px;
    position:relative; */
    /* position:absolute; */
`
const Inner = styled(motion.div)`
    width: 85vw;
    margin: 0 auto;
    padding-bottom: 100px;
`
const BgWrapper = styled(motion.div)`

`
const BgV = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition:{duration: 1,delay:1.6}},
}
const textV = {
    hidden: { opacity: 0, y: "-80px" },
    visible: { opacity: 1, y: "0px", transition: { duration: 0.5 } }
}



const sec02 = () => {
    const [ref, inView] = useInView({
        rootMargin: "-200px",
        triggerOnce: true,
    })

    return (
        <>
            <BgWrapper>
                <Bg inView={inView} />
            </BgWrapper>
            <Container ref={ref} >
                <Arrow />
                <Inner>
                    <Text content="私達が手掛けるプロジェクトはWebデザイン、UI・UX設計、CI・VIデザイン、グラフィックデザイン、パッケージデザインからプロダクトデザインまで多種多様です。" />
                    <Text content="手段ありきではなく、目的から逆算してデザインできるよう、コンセプトメイキング、グラフィック、ハードウェアからWebまで全てを一貫して手掛けます。一貫したコンセプトのもと、全てをデザイン・ブランディングできることが私達の最大の強みです。" />
                </Inner>
            </Container>
        </>
    )
}

export default sec02
