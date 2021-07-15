import React, { VFC } from 'react'
import Link from "next/link"
import styled from 'styled-components'
import MenuIcon from './MenuIcon'
import HeaderLine from './HeaderLine'

const MenuWrapper = styled.div`
    display:flex;
    align-items:center;
    text-decoration:none;
`
const MenuInner = styled.div`
    cursor: pointer;
    overflow:hidden;
`
const Links = styled(Link)``

const Text = styled.a`
    font-size:16px;
    letter-spacing:10px;
`

const HeaderMenu: VFC = () => {
    const [menuHover, setMenuHover] = React.useState(false);
    return (
        <MenuWrapper>
            <MenuIcon />
            <Links href="/" >
                <MenuInner
                    onMouseEnter={() => setMenuHover(true)}
                    onMouseLeave={() => setMenuHover(false)}
                >
                    <Text>MENU</Text>
                    <HeaderLine hover={menuHover} />
                </MenuInner>
            </Links>
        </MenuWrapper>
    )
}

export default HeaderMenu
