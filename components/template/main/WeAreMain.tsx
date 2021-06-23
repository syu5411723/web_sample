import styled from "styled-components"

import { Sec01, Sec02, Sec03, Sec04, Sec05, Sec06, Sec07 } from "../../organism/main/weare/index"

const Container = styled.div`
    margin-top: 200px;
    position:relative;
    z-index:1;

`

const WeAreMain = () => {
    return (
        <>
            <Container>
                <Sec01 />
                <Sec02 />
                <Sec03 />
                <Sec04 />
                <Sec05 />
                <Sec06 />
                <Sec07 />
            </Container>
        </>
    )
}

export default WeAreMain
