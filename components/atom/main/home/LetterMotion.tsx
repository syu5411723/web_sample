import styled, { keyframes } from "styled-components"

const Container = styled.div`
    position:fixed;
    width:100%;
    height:100vh;
    z-index:1000;
`
const Inner = styled.div`
    width: 496px;
    height: 186px;
    margin:auto;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
`
const Wrapper = styled.div`
    width: 496px;
    height: 186px;
    position:relative;
    overflow:hidden;
    z-index:1100;
    opacity:1;
`
const Animation = keyframes`
    from {
        transform: translateY(0);    
    }
    to {
        transform: translateY(-97.82609%);
    }
`
const Img = styled.div`
    position:absolute;
    width:100%;
    height:4600%;
    top:0;
    left:0;
    animation: ${Animation} 2s steps(45) both;
    &::before {
        content: url("/images/motion.svg");
        display:block;
        width:100%;
        height:100%;
    }
`


const LetterMotion = () => {
    return (
        <>
            {/* <Container> */}
                <Inner>
                    <Wrapper>
                        <Img />
                    </Wrapper>
                </Inner>
            {/* </Container> */}
        </>
    )
}

export default LetterMotion
