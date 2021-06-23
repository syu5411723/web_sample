import React from 'react'
import styled from 'styled-components'

import {Sec01 , Sec02, Sec03, Sec04 , Sec05, Sec06, Sec07} from "../../organism/main/wedo/index"

const Container = styled.div`
    position: relative;
    z-index: 10;
`

const WeDoMain = () => {
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

export default WeDoMain
