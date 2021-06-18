import React from 'react'
import styled from "styled-components"

import HeaderLogo from '../../atom/header/HeaderLogo'
import HeaderMenu from '../../atom/header/HeaderMenu'
import HeaderProject from '../../atom/header/HeaderProject'

const HeaderInnerWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:95%;
    height:100%;
    margin:0 auto;
`

const HeaderInner = ({color}) => {
    return (
        <>
            <HeaderInnerWrapper>
                <HeaderLogo color={color} />
                <HeaderMenu color={color} />
                <HeaderProject color={color} />
            </HeaderInnerWrapper>
        </>
    )
}

export default HeaderInner
