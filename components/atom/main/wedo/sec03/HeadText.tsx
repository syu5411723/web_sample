import { VFC } from "react"
import styled from "styled-components"

const Wrapper = styled.div``
const Text = styled.h2`
    color: #fff;
`
type Props = {
    text : string
}
const HeadText:VFC<Props> = ({text}) => {
    return (
        <>
            <Wrapper>
                <Text>{text}</Text>
            </Wrapper>
        </>
    )
}

export default HeadText
