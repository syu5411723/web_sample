import { VFC, useState } from 'react'
import Link from 'next/link'
import styled from "styled-components"

import AnimateLine from '../../atom/main/left/AnimateLine'
import Line from '../../atom/main/left/Line'
import SideBg from '../../atom/main/left/SideBg'
import SideText from '../../atom/main/left/SideText'

const Container = styled.div`
    position:fixed;
    top:50%;
    left: -49px;
    transform: rotate(90deg);
    z-index: 20;
`
const Links = styled(Link)`
    color: #333;
`
const TextWrapper = styled.a`
    cursor: pointer;
`
type Props = {
    color: string
}

const MainLeft: VFC<Props> = ({ color }) => {
    const [leftOpen, setLeftOpen] = useState(false);
    const handleChange = () => {
        setLeftOpen(!leftOpen);
    }
    return (
        <>
            <SideBg
                leftOpen={leftOpen}
            />
            <AnimateLine leftOpen={leftOpen} />
            <Links href="/page/weare">
                <Container
                    onMouseLeave={handleChange}
                    onMouseEnter={handleChange}
                >
                    <TextWrapper>
                        <SideText leftOpen={leftOpen} color={color} />
                    </TextWrapper>
                    <Line leftOpen={leftOpen} />
                </Container>
            </Links>
        </>
    )
}

export default MainLeft
