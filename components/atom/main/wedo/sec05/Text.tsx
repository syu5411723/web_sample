import { useInView } from "react-intersection-observer"
import styled, { css, keyframes } from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 6.5%;
    z-index:20;
`

const T = styled.h2`
    color: #fff;
`
const Inner = styled.div`
    position:relative;
    width:45vw;
    height:9vw;
    overflow:hidden;
`
type InView = {
    inView: boolean
}
const TextAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-97.4359%)
    }
`
const MotionText = styled.div<InView>`
    position:absolute;
    width:100%;
    height:3900%;
    top: 0;
    left:0;
    background:url("/images/motion_letter.png") no-repeat;
    background-size: 100% 100%;
    ${({ inView }) => inView && css`
        animation: ${TextAnimation} 1.5s steps(38) both;
    `}
`

const Text = () => {
    const [ref, inView] = useInView({
        rootMargin: "100px 0px",
        triggerOnce: true,
    })
    return (
        <>
            <Wrapper ref={ref}>
                <Inner>
                    {/* <T>Think by hande</T> */}
                    <MotionText inView={inView} />
                </Inner>
            </Wrapper>
        </>
    )
}

export default Text
