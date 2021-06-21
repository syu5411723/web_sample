import { VFC } from "react"
import styled from "styled-components"

const Container = styled.div`
    display:flex;
    margin-bottom: 20px;
`
const TitleWrapper = styled.div`
    width:49%;
    display:flex;
    justify-content:flex-end;
`
const Title = styled.p`
    
`
const Content = styled.p`
    margin-left:20px;
`

type Props = {
    title: string
    content: string
}
const Info: VFC<Props> = ({ title, content }) => {
    return (
        <>
            <Container>
                <TitleWrapper>
                    <Title>{title}</Title>
                </TitleWrapper>
                <Content>{content}</Content>
            </Container>
        </>
    )
}

export default Info
