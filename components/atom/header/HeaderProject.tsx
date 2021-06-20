import {VFC} from 'react'
import Link from "next/link"
import styled from 'styled-components'

const MenuWrapper = styled(Link)`
    display:flex;
    align-items:center;
    text-decoration:none;
`
type Props = {
    color: string
}


const HeaderProject:VFC<Props>  = ({color}) => {
    const MenuText = styled.a`
    font-size:16px;
    letter-spacing:3px;
    color:${color};
    cursor: pointer;
`

    return (
        <>
            <MenuWrapper href="/">
                <MenuText>VIEW PROJECTS</MenuText>
            </MenuWrapper>
        </>
    )
}

export default HeaderProject
