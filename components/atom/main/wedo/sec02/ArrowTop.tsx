import { motion } from "framer-motion"
import styled from "styled-components"

const Wrapper = styled.div`
    width:10px;
    height: 100px;
    overflow:hidden;
    display:flex;
    justify-content:center;
    margin-left: 20px;
`

const Line = styled(motion.div)`
    width:1px;
    height: 60px;
    background-color: #fff;
`
const lineV = {
    hidden: {y: 0},
    visible: {
        y: [-130, 60, 40, 50, 100 ],
        transition: {
            duration: 5,
            times: [0, 0.4, 0.6, 0.8, 1],
            loop: Infinity,
        }
    }
}

const ArrowTop = () => {
    return (
        <>
            <Wrapper>
                <Line 
                    variants={lineV}
                    initial="hidden"
                    animate="visible"
                />
            </Wrapper>
        </>
    )
}

export default ArrowTop
