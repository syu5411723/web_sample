import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

import { Bg, Number, Img } from '../../../atom/main/wedo/sec03/index'
import Thumbnail from '../../../molecule/main/wedo/sec02/Thumbnail'
import ImgAnimate from '../../../molecule/main/wedo/sec03/ImgAnimate'

const Container = styled.div`
    position:relative;
    margin-top: 300px;
`
const Wrapper = styled.div``


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
                <Wrapper
                    ref={ref}
                >
                    <Bg />
                </Wrapper>
                <ImgAnimate  inView={inView} />
                <Number inView={inView} />
            </Container>
        </>
    )
}

export default Sec03
