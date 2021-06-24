import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
// import Head from '../../../atom/main/wedo/sec01/Head'
import Head from '../../../molecule/main/wedo/sec01/Head'
import SubHead from '../../../atom/main/wedo/sec01/SubHead'

const Container = styled.div`
    margin-top: 100px;
`



const Sec01 = () => {
    return (
        <>
            <Container>
                <SubHead/>
                <Head />
            </Container>
        </>
    )
}

export default Sec01
