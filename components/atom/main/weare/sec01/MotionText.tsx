import styled, { keyframes } from "styled-components"

const Wrapper = styled.div`
    width:26.7vw;
    height: 14.24vw;
    top: -50%;
    left:-3%;
    position:absolute;
    z-index:2;
`
const Inner = styled.div`
    position:relative;
    overflow:hidden;
    width: 200px;
    height:100px;
`

const TextAnimation = keyframes`
    from {
        transform: translateY(0);
    }
    to{
        transform: translateY(-97.5%);
    }
`

const Text = styled.div`
    position:absolute;
    width:100%;
    height:3800%;
    top:0;
    left:0;
    background: url("/images/motion_letter.svg") no-repeat;
    background-size:100% 100%;
    animation: ${TextAnimation} 1.2s steps(39) both ;
`

const MotionText = () => {
    return (
        <>
            <Wrapper>
                <Inner>
                    <Text />
                </Inner>
            </Wrapper>
        </>
    )
}

export default MotionText
