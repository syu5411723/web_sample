import styled from 'styled-components'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import React, { useEffect } from 'react'


import Head from '../../../molecule/main/wedo/sec01/Head'
import { SubHead } from '../../../atom/main/wedo/sec01'



const Container = styled.div`
    position:relative;
    z-index:10;
`
const ThumbWrapper = styled(motion.div)`
    height:100vw;
`

const Sec01 = () => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 0.12], [0, 200]);
    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    return (
        <>
            <Container>
                <ThumbWrapper
                    style={{ y: y }}
                >
                    <SubHead />
                    <Head />
                </ThumbWrapper>
            </Container>
        </>
    )
}

export default Sec01
