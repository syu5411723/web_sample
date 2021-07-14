import { VFC } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    margin-left: 10px;
    margin-top:-20px;
`
const Text = styled.p`
    font-size: 18px;
    color: rgb(173,173,173);
`
type Props = {
    text : string
}

const Text03:VFC<Props> = ({text}) => {
    return (
        <>
            <Wrapper>
                <Text>{text}</Text>
            </Wrapper>
        </>
    )
}

export default Text03
