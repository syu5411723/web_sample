import { motion } from "framer-motion"
import styled from "styled-components"

const Wrapper = styled.div`
    width: 50px;
    height: 30px;
    overflow:hidden;
`

const Line01 = styled(motion.div)`
    width:40px;
    height: 1px;
    background-color: #fff;
`
const Line02 = styled(motion.div)`

`
const Line03 = styled(motion.div)``

const line01V = {
    hidden: { x: 0 , width: 0},
    visible: {
        x: [-100, 15, 15, 15, 100],
        width: [40, 20, 20 ,40, 40 ],
        transition: {
            duration: 4,
            times: [0, 0.4 , 0.88 ,0.97, 1],
            loop:Infinity,
        }
    }
}

const ArrowBottom = () => {
    return (
        <>
            <Wrapper>
                <Line01 
                    variants={line01V}
                    initial="hidden"
                    animate="visible"
                />
                <Line02 />
                <Line03 />
            </Wrapper>
        </>
    )
}

export default ArrowBottom
