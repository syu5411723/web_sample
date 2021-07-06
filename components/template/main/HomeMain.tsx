import styled from "styled-components"

import HomeImage from "../../organism/main/home/HomeImage"

const Container = styled.div`
    width:100vw;
    height: 100vh;
`

export const HomeMain = () => {
    return (
        <>
            <Container>
                <HomeImage />
            </Container>
        </>
    )
}
