import { VFC } from "react"
import styled from "styled-components"

const Text = styled.div`
    font-size: 12px;
    letter-spacing:3px;
    color: #fff;
`
type Props = {
    text: string
}

const ButtonText:VFC<Props> = ({text}) => {
    return (
        <>
            <Text>{text}</Text>
        </>
    )
}

export default ButtonText
