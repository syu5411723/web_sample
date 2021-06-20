import { VFC } from "react"
import styled from "styled-components"

const Text = styled.h3`
    font-size: 15px;
    font-weight: bold;
`
type Props = {
    text: string
}

const Text01:VFC<Props> = ({text}) => {
    return (
        <>
            <Text>{text}</Text>
        </>
    )
}

export default Text01
