import styled from 'styled-components'

import Head from '../../../molecule/main/wedo/sec01/Head'
import { SubHead } from '../../../atom/main/wedo/sec01'
import { motion, useTransform, useViewportScroll } from 'framer-motion'



const Container = styled.div`

`
const ThumbWrapper = styled(motion.div)`
    height:100vw;

`


const Sec01 = () => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0, 0.12], [0, 200])
    return (
        <>
            <Container>
                <ThumbWrapper
                    style={{y: y}}
                >
                    <SubHead />
                    <Head />
                </ThumbWrapper>
            </Container>
        </>
    )
}

export default Sec01
