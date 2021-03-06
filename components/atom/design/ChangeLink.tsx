import styled from "styled-components"
import { motion } from "framer-motion"

const ChnagePage = styled(motion.div)`
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #333;
    z-index: 32;
`

const pageV = {
    hidden: { x: "100vw" },
    exit: { x: "0vw", transition: { duration: 1, delay: 0.5 , ease: [.89,0,.31,.31] }}
}

const ChangeLink = () => {
    return (
        <>
            <ChnagePage
                variants={pageV}
                initial="hidden"
                exit="exit"
            />
        </>
    )
}

export default ChangeLink
