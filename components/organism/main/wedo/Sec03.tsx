import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

import { Bg, Number, Img } from '../../../atom/main/wedo/sec03/index'
import Thumbnail from '../../../molecule/main/wedo/sec02/Thumbnail'
import ImgAnimate from '../../../molecule/main/wedo/sec03/ImgAnimate'

const Container = styled.div`
    position:relative;
`
const BgWrapper = styled.div``

const thumbV = {
    hidden:{opacity: 0,},
    visible: {opacity: 1, transition: {duration:0.5, delay:2.7}}
}

const Sec03 = () => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    });
    return (
        <>
            <Container>
                    <Thumbnail />
                <BgWrapper
                    ref={ref}
                >
                    <Bg />
                </BgWrapper>
                <ImgAnimate img="/images/brand_1.png" size={18} top={40} left={30} zIndex={1} delay={1.22} inView={inView} />
                <ImgAnimate img="/images/brand_2.png" size={20} top={60} left={40} zIndex={2} delay={1.24} inView={inView} />
                <ImgAnimate img="/images/brand_3.png" size={30} top={30} left={52} zIndex={1} delay={1.26} inView={inView} />
                <Number inView={inView} />
            </Container>
        </>
    )
}

export default Sec03
