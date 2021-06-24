import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 6.5%;
`

const T = styled.h2`
    color: #fff;
    
`

const Text = () => {
    return (
        <>
            <Wrapper>
                <T>Think by hande</T>
            </Wrapper>
        </>
    )
}

export default Text
