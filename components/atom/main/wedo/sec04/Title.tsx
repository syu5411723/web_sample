import { VFC } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    text-align:center;
    width:100%;
    
`
const Text = styled.h1`
    color: #fff;
    font-size:55px;
    font-weight:lighter;
    letter-spacing:4px;
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
