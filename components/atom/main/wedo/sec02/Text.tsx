import { VFC } from "react"
import styled from "styled-components"

const Content = styled.p`
    color: #fff;
    font-size: 13px;
    line-height:30px;
    margin-bottom: 10px;
`

type Props = {
    content: string
}

const Text:VFC<Props> = ({content}) => {
    return (
        <>
            <Content>{content}</Content>
        </>
    )
}

export default Text
