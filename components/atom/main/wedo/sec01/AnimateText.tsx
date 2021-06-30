import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import Headtext from './Headtext'

const Wrapper = styled.div`
    text-align:center;
    display:flex;
    justify-content:center;
    height:50px;
    overflow:hidden;
    width:100%;
    margin-bottom: 40px;
`


const AnimateText = ({text01, text02, text03, text04, text05, text06, text07, text08, text09}) => {
    return (
        <>
            <Wrapper>
                <Headtext text={text01} delay={2} />
                <Headtext text={text02} delay={2.01} />
                <Headtext text={text03}delay={2.02} />
                <Headtext text={text04} delay={2.03} />
                <Headtext text={text05} delay={2.04} />
                <Headtext text={text06} delay={2.05} />
                <Headtext text={text07} delay={2.06} />
                <Headtext text={text08} delay={2.07} />
                <Headtext text={text09} delay={2.08} />
            </Wrapper>
        </>
    )
}

export default AnimateText
