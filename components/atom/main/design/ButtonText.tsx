import { VFC } from "react"
import styled from "styled-components"

type Size = {
    small: boolean
}
const Text = styled.div<Size>`
    font-size: ${({small}) => small ? "12px" : "3vw"};
    letter-spacing:3px;
    color: #fff;
    white-space:nowrap;
`
type Props = {
    text: string
    small: boolean
}

const ButtonText:VFC<Props> = ({text, small}) => {
    return (
        <>
            <Text small={small} >{text}</Text>
        </>
    )
}

export default ButtonText
