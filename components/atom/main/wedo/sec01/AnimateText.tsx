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
                <Headtext text={text01} delay={1.7} />
                <Headtext text={text02} delay={1.71} />
                <Headtext text={text03}delay={1.72} />
                <Headtext text={text04} delay={1.73} />
                <Headtext text={text05} delay={1.74} />
                <Headtext text={text06} delay={1.75} />
                <Headtext text={text07} delay={1.76} />
                <Headtext text={text08} delay={1.77} />
                <Headtext text={text09} delay={1.78} />
            </Wrapper>
        </>
    )
}

export default AnimateText
