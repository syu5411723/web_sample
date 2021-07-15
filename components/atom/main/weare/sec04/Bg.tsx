import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const BgWrapper = styled(motion.div)`
    width:60vw;
    height: 100%;
    background-color:gray;
    opacity: 0.2;
    position:absolute;
    z-index:1;
    top:0;
    right:0;
`
const bgV = {
    closed: {x: "100%"},
    open: {x: "0", transition:{duration:3, ease: [0,.74,.34,.8]}}, 
}

const Bg = () => {
    const [ref, inView] = useInView({
        rootMargin: "-200px 0px",
        triggerOnce: true,
    })
    return (
        <>
            <BgWrapper 
                ref={ref}
                variants={bgV}
                animate={inView ? "open" : "closed" }
            />
        </>
    )
}

export default Bg
