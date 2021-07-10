import {VFC} from 'react'
import Link from "next/link"
import styled from 'styled-components'

const MenuWrapper = styled(Link)`
    display:flex;
    align-items:center;
    text-decoration:none;
`
const MenuText = styled.a`
    font-size:16px;
    letter-spacing:3px;
    cursor: pointer;
`

const HeaderProject:VFC  = () => {
    return (
        <>
            <MenuWrapper href="/">
                <MenuText>VIEW PROJECTS</MenuText>
            </MenuWrapper>
        </>
    )
}

export default HeaderProject
