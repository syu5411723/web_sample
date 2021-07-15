import React, { VFC } from 'react'
import Link from "next/link"
import styled from 'styled-components'
import HeaderLine from './HeaderLine'

const Wrapper = styled(Link)`
    display:flex;
    align-items:center;
    text-decoration:none;
`
const Inner = styled.div`
    cursor: pointer;
    overflow:hidden;
`
const MenuText = styled.a`
    font-size:16px;
    letter-spacing:3px;
`

const HeaderProject: VFC = () => {
    const [hover, setHover] = React.useState(false);
    return (
        <>
            <Wrapper href="#">
                <Inner
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <MenuText>VIEW PROJECTS</MenuText>
                    <HeaderLine hover={hover} />
                </Inner>
            </Wrapper>
        </>
    )
}

export default HeaderProject
