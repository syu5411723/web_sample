import React, { VFC } from 'react'
import styled from 'styled-components'
import { motion, useViewportScroll } from "framer-motion"

import Text01 from "../../../atom/main/design/Text01"
import Text02 from "../../../atom/main/design/Text02"
import { useInView } from 'react-intersection-observer'

const TextWrapper = styled(motion.div)`
    width: 500px;
    line-height: 50px;
`
const TextInner = styled(motion.div)``
const Text02Wrapper = styled(motion.div)``

type Props = {
    text01: string
    text02: string
    text03: string
    text04: string
    primary: boolean
}
const textV = {
    hidden: { opacity: 0, x: "-50px" },
    visible: { opacity: 1, x: "0", transition: { duration: 0.5 } }
}
const text01V = {
    hidden: { opacity: 0, x: "-50px" },
    visible: { opacity: 1, x: "0", transition: { duration: 0.5 , delay: 0.2 } }
}
const text02V = {
    hidden: { opacity: 0, x: "-50px" },
    visible: { opacity: 1, x: "0", transition: { duration: 0.5 , delay: 0.3 } }
}
const text03V = {
    hidden: { opacity: 0, x: "-50px" },
    visible: { opacity: 1, x: "0", transition: { duration: 0.5, delay:0.4 } }
}

const MainThumb: VFC<Props> = ({ text01, text02, text03, text04, primary }) => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    })
    return (
        <>
            <TextWrapper ref={ref} >
                <TextInner
                    variants={textV}
                    animate={inView ? "visible" : "hidden"}
                >
                    <Text01 primary={primary} text={text01} />
                </TextInner>
                <TextInner>
                    <Text02Wrapper
                        variants={text01V}
                        animate={inView ? "visible" : "hidden"}
                    >
                        <Text02 primary={primary} text={text02} span={false} />
                    </Text02Wrapper>
                    <Text02Wrapper
                        variants={text02V}
                        animate={inView ? "visible" : "hidden"}
                    >
                        <Text02 primary={primary} text={text03} span={false} />
                    </Text02Wrapper>
                    <Text02Wrapper
                        variants={text03V}
                        animate={inView ? "visible" : "hidden"}
                    >
                        <Text02 primary={primary} text={text04} span={false} />
                    </Text02Wrapper>
                </TextInner>
            </TextWrapper>
        </>
    )
}

export default MainThumb