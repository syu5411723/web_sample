import styled from "styled-components"

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom: 90px;
`
const Text = styled.h1`
    font-size: 40px;
    font-weight:lighter;
    letter-spacing: 5px;
`

const Head = () => {
    return (
        <>
            <Container>
                <Text>INFOMATION</Text>
            </Container>
        </>
    )
}

export default Head
