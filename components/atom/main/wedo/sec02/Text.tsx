import { VFC } from "react"
import styled from "styled-components"

const Content = styled.p``

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
