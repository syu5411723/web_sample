import {VFC} from 'react'
import Link from "next/link"
import styled from 'styled-components'

const Links = styled(Link)`
    text-decoration:none;
`
const Logo = styled.a`
    font-size:22px;
    letter-spacing:2px;
    cursor: pointer;
`

const HeaderLogo:VFC = () => {

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
