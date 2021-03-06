import React from 'react'
import styled from 'styled-components'

import { Sec01, Sec02, Sec03, Sec04, Sec05, Sec06, Sec07 } from "../../organism/main/wedo/index"
import Footer from '../../molecule/footer/Footer'
import Header from '../Header'

const Container = styled.div`
    position: relative;
    z-index: 10;
`
const Inner = styled.div`
    position:relative;
    margin-top: 150px;
`
const containerV = {
    hidden: {opacity: 0},
    visible: {opacity:1, transtion: {duration:0.6, delay: 1}}
}

const WeDoMain = () => {
    return (
        <>
            <Container>
                <Inner>
                    <Sec01 />
                    <Sec02 />
                </Inner>
                <Sec03 />
                <Sec04 />
                <Sec05 />
                <Sec06 />
                <Sec07 />
                <Footer primary={false} />
            </Container>
        </>
    )
}

export default WeDoMain
