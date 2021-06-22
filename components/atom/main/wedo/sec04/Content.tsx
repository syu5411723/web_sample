import { VFC } from "react"
import styled from "styled-components"

const ContentText = styled.p`
    color: #fff;
    font-size: 13px;
    line-height:30px;
`
type Props = {
    content:  string
}

const Content:VFC<Props>= ({content}) => {
    return (
        <>
                <ContentText>{content}</ContentText>
        </>
    )
}

export default Content
