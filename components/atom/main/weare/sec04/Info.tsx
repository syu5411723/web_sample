import { VFC } from "react"
import styled from "styled-components"

const InfoText = styled.p`
    font-size: 20px;
`

type Props = {
    info
}

const Info:VFC<Props> = ({info}) => {
        return (
        <>
                <InfoText>{info}</InfoText>
        </>
    )
}

export default Info
