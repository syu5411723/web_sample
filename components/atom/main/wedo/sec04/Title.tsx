import { VFC } from "react"
import styled from "styled-components"

const Wrapper = styled.div``
const Text = styled.h1`
    color: #fff;
`

const Title:VFC = () => {
    return (
        <>
            <Wrapper>
                <Text>BRAND &</Text>
                <Text>IDENTITY DESIGN</Text>
            </Wrapper>
        </>
    )
}

export default Title
