import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import Headtext from './Headtext'

const Wrapper = styled.div`
    text-align:center;
`



const AnimateText = () => {
    return (
        <>
            <Wrapper>
                <Headtext text="" delay={3} />
            </Wrapper>
        </>
    )
}

export default AnimateText
