import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Wrapper =  styled.div``
const Text01 = styled(motion.h2)`
    font-size: 30px;
    letter-spacing: 10px;

`
const Text02 = styled(motion.h2)`
    font-size: 30px;
    letter-spacing: 30px;

`



const Head = () => {
    return (
        <>
            <Wrapper>
                <Text01
                    style={{color: "#fff"}}
                >WE  CREATE</Text01>
                <Text02
                    style={{color: "#fff"}}
                >SENSUS</Text02>
                <Text02
                    style={{color: "#fff"}}
                >DESIGN</Text02>
            </Wrapper>
        </>
    )
}

export default Head
