import { VFC } from 'react'
import Link from "next/link"
import styled from 'styled-components'
import MenuIcon from './MenuIcon'

const MenuWrapper = styled.div`
    display:flex;
    align-items:center;
    text-decoration:none;
`
const Links = styled(Link)``

const Text = styled.a`
    font-size:16px;
    letter-spacing:10px;
    cursor: pointer;
`


const HeaderMenu: VFC = () => {

    return (
            <MenuWrapper>
                    <MenuIcon />
                    <Links href="/" >
                    <Text>MENU</Text>
                    </Links>
            </MenuWrapper>
    )
}

export default HeaderMenu
