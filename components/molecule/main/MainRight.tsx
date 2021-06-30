import React from 'react'
import Link from 'next/link'
import styled from "styled-components"

import AnimateLine from '../../atom/main/right/AnimateLine'
import Line from '../../atom/main/right/Line'
import SideBg from '../../atom/main/right/SideBg'
import SideText from '../../atom/main/right/SideText'

const Container = styled.div`
    position:fixed;
    top:50%;
    right: -50px;
    transform: rotate(90deg);
    z-index: 20;
    cursor: pointer;
`
const Links = styled(Link)`
    color: #333;
`
const TextWrapper = styled.a``

const MainRight = () => {
    const [isOpen, setOpen] = React.useState(false);
    const RightChange = () => {
        setOpen(!isOpen);
    }
    return (
        <>
            <SideBg
                isOpen={isOpen}
            />
            <AnimateLine isOpen={isOpen} />
            <Links href="/page/wedo" >
                <Container
                    onMouseLeave={RightChange}
                    onMouseEnter={RightChange}
                >
                    <Line isOpen={isOpen} />
                    <TextWrapper>
                        <SideText isOpen={isOpen} />
                    </TextWrapper>
                </Container>
            </Links>
        </>
    )
}

export default MainRight