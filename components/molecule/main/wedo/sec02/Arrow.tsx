
import styled from "styled-components"
import ArrowTop from "../../../../atom/main/wedo/sec02/ArrowTop"
import ArrowBottom from "../../../../atom/main/wedo/sec02/ArrowBottom"

const ArrowContaier = styled.div`
    position :absolute;
    top:-25vw;
    left: 50%;
`

const Arrow = () => {
    return (
        <>
            <ArrowContaier>
                <ArrowTop />
                <ArrowBottom />
            </ArrowContaier>
        </>
    )
}

export default Arrow
