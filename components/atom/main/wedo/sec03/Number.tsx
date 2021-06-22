import styled from "styled-components"

const Wrapper = styled.div`
    position:absolute;
    bottom: 0%;
    right:15%;
`
const Text = styled.p`
    color: #fff;
`

const Number = () => {
    return (
        <>
            <Wrapper>
                <Text>01</Text>
            </Wrapper>
        </>
    )
}

export default Number
