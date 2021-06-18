import {VFC} from 'react'
import Link from "next/link"
import styled from 'styled-components'

const Links = styled(Link)`
    text-decoration:none;
`
type Props = {
    color : string
}

const HeaderLogo:VFC<Props> = ({color}) => {
    const Logo = styled.a`
    font-size:22px;
    color:${color};
    letter-spacing:2px;
`
    return (
        <>
            <Links href="/">
                <Logo>
                    SUPERCROUDS
                </Logo>
            </Links>
        </>
    )
}

export default HeaderLogo
