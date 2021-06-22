import { VFC } from "react"
import styled from "styled-components"

const Wrapper = styled.div``
const Logo = styled.i``
type Props = {
    logo: string
}

const FooterLogo:VFC<Props> = ({logo}) => {
    return (
        <>
            <Wrapper>
                <Logo></Logo>
            </Wrapper>
        </>
    )
}

export default FooterLogo
