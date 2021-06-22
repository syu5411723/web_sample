import styled from "styled-components"

import {Arrow, Title,} from "../../../../atom/main/wedo/sec04/index"

const Wrapper = styled.div`
    display:flex;
    align-items:center;
`




const ThumbLink = () => {
    return (
        <>
            <Wrapper>
                <Title />
                <Arrow />
            </Wrapper>
        </>
    )
}

export default ThumbLink
