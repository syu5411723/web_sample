import { motion } from 'framer-motion'
import { VFC } from 'react'
import styled from 'styled-components'

const BgWrapper = styled(motion.div)`
    background-color: #000;
    width:100%;
    height:100%;
    position:fixed;
    top: 0;
    left: 100%;
    z-index: 10;
` 
const wrapperV = {
    closed: {x: "0%"},
    open: {x: "-20%", transition: {duration: 0.5, ease: [0,.85,.81,1]}},
}
type Props = {
    isOpen: boolean
}

const SideBg:VFC<Props> = ({isOpen}) => {
    return (
        <>

            <BgWrapper 
                variants={wrapperV}
                animate={isOpen ? "open" : "closed"}
            />
        </>
    )
}

export default SideBg
