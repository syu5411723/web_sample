import styled from "styled-components"
import { motion } from "framer-motion"


const BeforeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
    position:fixed;
    top:0;
    left: 0;
    z-index: 1;
`
const AfterContainer = styled(motion.div)`
    position:fixed;
    top:0;
    left: 100;
    background-color: #fff;
    width:100vw;
    height: 100vh;
    z-index:10;
`

const contaienrV = {
    hidden: { x: "100vw" },
    visible: { x: "0vw", transition: { duration: 1, delay: 0.5 } }
}

const HomeStartAnimate = () => {
    return (
        <>
            <BeforeContainer />
            <AfterContainer
                variants={contaienrV}
                initial="hidden"
                animate="visible"
            />
            
        </>
    )
}

export default HomeStartAnimate
