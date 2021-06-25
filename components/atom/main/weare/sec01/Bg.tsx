import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BgWrapper = styled(motion.div)`
    width: 100vw;
    height: 450px;
    background-color:gray;
    opacity:0.2;
    position:absolute;
    z-index:1;
    top:100px;
`
const V ={
    hidden : {x: "-100vw"},
    visible: {x: "0", transition: {duration: 0.6, delay: 1.8}}
}



const Bg = () => {
    return (
        <>
            <BgWrapper 
                variants={V}
                initial="hidden"
                animate="visible"
            />
        </>
    )
}

export default Bg
