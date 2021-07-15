import React, { useEffect, VFC } from 'react'
import Link from "next/link"
import styled from 'styled-components'

import HeaderLine from './HeaderLine'

const Links = styled(Link)`
`
const Logo = styled.a`
    cursor: pointer;
    overflow:hidden;
`
const Text = styled.p`
    font-size:22px;
    letter-spacing:2px;
`

const HeaderLogo: VFC = () => {
    const [hover, setHover] = React.useState(false);
    return (
        <>
            <Links href="/" scroll={false}>
                <Logo
                    onMouseEnter={() => setHover(true) }
                    onMouseLeave={()=> setHover(false)}
                >
                    <Text>
                        SUPERCROUDS
                    </Text>
                    <HeaderLine hover={hover} />
                </Logo>
            </Links>
        </>
    )
}

export default HeaderLogo
