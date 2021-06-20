import styled from "styled-components"

import Name from "../../../atom/main/weare/sec04/Name"
import Card from "../../../atom/main/weare/sec04/Card"
import Info from "../../../atom/main/weare/sec04/Info"

const Container = styled.div`
    position: relative;
    width:100vw;
    height: 1000px;
`
const Inner = styled.div`
`



const Person = ({ img, name }) => {
    return (
        <>
            <Container>
                <Inner>
                    <Name name={name} />
                    <Card img={img} />
                    <Info />
                </Inner>
            </Container>
        </>
    )
}

export default Person
