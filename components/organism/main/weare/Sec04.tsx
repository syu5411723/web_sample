import React from 'react'
import styled from 'styled-components'

import MainThumb from '../../../molecule/main/design/MainThumb'
import Bg from '../../../atom/main/weare/sec04/Bg'
import Button from '../../../molecule/main/design/Button'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Person from '../../../molecule/main/weare/Person'


const Container = styled.div`
    height:100%;
    width:100%;
    position :relative;
`
const Inner = styled.div`
    margin-bottom: 150px;
`
const ThumbWrapper = styled(motion.div)`
    margin-left: 100px;
`

const Sec04 = () => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0.33, 0.45], [0, 150]);
    return (
        <>
            <Container>
                <Inner>
                    <Bg />
                    <ThumbWrapper
                        style={{y : y}}
                    >
                        <MainThumb text01="OUR TEAM" text02="WISDOM OF" text03="CROEDS" text04="" primary={true} />
                    </ThumbWrapper>
                    <Person />
                </Inner>
                <Button text="CAREER" ButtonBool={true} small={true} />
            </Container>
        </>
    )
}

export default Sec04
