import { VFC } from "react"
import styled from "styled-components"

const Text = styled.h3<Color>`
    font-size: 15px;
    font-weight: bold;
    color: ${({primary}) => primary ? "#000" : "#fff"};
`
type Color = {
    primary:boolean
}
type Props = {
    text: string
    primary: boolean
}

const Text01:VFC<Props> = ({text , primary}) => {
    return (
        <>
            <Text primary={primary} >{text}</Text>
        </>
    )
}

export default Text01
