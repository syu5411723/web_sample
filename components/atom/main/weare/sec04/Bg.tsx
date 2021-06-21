import React from 'react'
import styled from 'styled-components'

const BgWrapper = styled.div`
    width:60vw;
    height: 100%;
    background-color:gray;
    opacity: 0.2;
    position:absolute;
    z-index:1;
    top:0;
    right:0;
`

const Bg = () => {
    return (
        <>
            <BgWrapper />
        </>
    )
}

export default Bg
