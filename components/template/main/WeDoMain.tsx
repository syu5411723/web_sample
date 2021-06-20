import React from 'react'
import styled from 'styled-components'
import Sec01 from '../../organism/main/wedo/Sec01'

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
            </Container>
        </>
    )
}

export default WeDoMain
