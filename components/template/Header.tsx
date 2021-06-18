import React , {VFC}from 'react'
import styled from 'styled-components'
import HeaderInner from '../molecule/header/HeaderInner'

const HeaderContainer  = styled.div`
    position:fixed;
    width:100%;
    height: 80px;
    z-index: 5;
    color: #000;
`
type Props = {
    color: string
}

const Header:VFC<Props> = ({color}) => {
    return (
        <>
            <HeaderContainer>
                <HeaderInner  color={color}/>
            </HeaderContainer>
        </>
    )
}

export default Header
