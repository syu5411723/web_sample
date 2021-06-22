import React from 'react'
import styled from 'styled-components'

import {Sec01 , Sec02, Sec03, Sec04 } from "../../organism/main/wedo/index"

const Container = styled.div`
    position: absolute;
    z-index: 10;
    top:0;
    left: 0;
`

const WeDoMain = () => {
    return (
        <>
            <Container>
                <Sec01 />
                <Sec02 />
                <Sec03 />
                <Sec04 />
            </Container>
        </>
    )
}

export default WeDoMain
