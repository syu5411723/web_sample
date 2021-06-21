import { VFC } from "react"
import styled from "styled-components"

const Wrapper = styled.div`

`
const Text = styled.p`
    font-size: 14px;
`

type Props = {
    content: string
}
const ProfileContet:VFC<Props> = ({content}) => {
    return (
        <>
            <Wrapper>
                <Text>{content}</Text>
            </Wrapper>
        </>
    )
}

export default ProfileContet
