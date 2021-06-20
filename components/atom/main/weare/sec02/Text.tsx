import { VFC } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    margin-bottom: 40px;
`


type Props ={
    content : string
    LH: number
}

const Text:VFC<Props> = ({LH , content}) => {
    const Content = styled.p`
    font-size: 14px;
    font-weight:lighter;
    line-height:${LH}px;
`
    return (
        <>
            <Wrapper>
                <Content>{content}</Content>
            </Wrapper>
        </>
    )
}

export default Text
