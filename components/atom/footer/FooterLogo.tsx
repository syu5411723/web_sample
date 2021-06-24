import { VFC } from "react"
import styled from "styled-components"
import Image from "next/dist/client/image"

const Wrapper = styled.div``
const Logo = styled.i`
    cursor: pointer;
`
type Props = {
    img: string
}


const FooterLogo:VFC<Props> = ({img}) => {
    return (
        <>
            <Wrapper>
                <Image src={img} width={15} height={20} /> 
            </Wrapper>
        </>
    )
}

export default FooterLogo
