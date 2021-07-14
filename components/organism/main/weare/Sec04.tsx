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
    margin-top:-100px;
`
const Inner = styled.div`
    padding-bottom: 200px;
    padding-top: 100px;
`
const ThumbWrapper = styled(motion.div)`
    margin-left: 100px;
`
const ButtonWrapper = styled.div`
    position:absolute;
    bottom: -4%;
    left:50%;
    z-index:20;
    transform: translateX(-50%);

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
                        style={{ y: y }}
                    >
                        <MainThumb text01="OUR TEAM" text02="WISDOM OF" text03="CROEDS" text04="" text05="We make something that we would use myself." primary={true} span={false} />
                    </ThumbWrapper>
                    <Person />
                </Inner>
                <ButtonWrapper>
                    <Button text="CAREER" ButtonBool={true} small={true} />
                </ButtonWrapper>
            </Container>
        </>
    )
}

export default Sec04
