import React , {VFC}from 'react'
import styled from 'styled-components'
import HeaderInner from '../molecule/header/HeaderInner'

const HeaderContainer  = styled.div<Props>`
    position:fixed;
    width:100%;
    height: 80px;
    z-index: 99;
    top:0;
    left: 0;
    color: #fff;
    mix-blend-mode:difference;

`
type Props = {
    white:boolean
}

const Header:VFC<Props> = ({ white}) => {
    return (
        <>
            <HeaderContainer white={white}  >
                <HeaderInner />
            </HeaderContainer>
        </>
    )
}

export default Header
