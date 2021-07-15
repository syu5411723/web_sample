import React , {VFC}from 'react'
import styled from 'styled-components'
import HeaderInner from '../molecule/header/HeaderInner'

const HeaderContainer  = styled.div`
    position:fixed;
    width:100%;
    height: 80px;
    z-index: 99;
    top:0;
    left: 0;
    color: #fff;
    mix-blend-mode:difference;
`

const Header:VFC = () => {
    return (
        <>
            <HeaderContainer  >
                <HeaderInner />
            </HeaderContainer>
        </>
    )
}

export default Header
