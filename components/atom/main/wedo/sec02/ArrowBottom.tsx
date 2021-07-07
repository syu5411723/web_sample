import { motion } from "framer-motion"
import styled from "styled-components"

const Wrapper = styled(motion.div)`
    width: 50px;
    height: 38px;
    margin-top: -5px;
    overflow:hidden;
`

const Line01 = styled(motion.div)`
    width:40px;
    height: 1px;
    background-color: #fff;
`
const Line02 = styled(motion.div)`
    height:1px;
    width:46px;
    background-color: #fff;
    margin-left: 8px;
    margin-top: 14px;
`
const Line03 = styled(motion.div)`
    height:1px;
    width:46px;
    background-color: #fff;
    margin-left: -4px;
`

const line01V = {
    hidden: { x: 0, width: 0 },
    visible: {
        x: [-100, 15, 15, 15, 100],
        width: [40, 20, 20, 40, 40],
        transition: {
            duration: 4,
            times: [0, 0.1, 0.9, 0.95, 1],
            delay:0.25,
            loop: Infinity,
        }
    }
}
const line02V = {
    hidden: {
        x: 20,
        y: -80,
        rotate: -75
    },
    visible: {
        x: [20, 0, 0, 0, -20],
        y: [-80, 0, 0, 0, 80],
        rotate: -75,
        transition: {
            duration: 4,
            delay:0.25,
            times: [0.05, 0.15, 0.8, 0.9, 0.95],
            loop: Infinity,
        }
    }
}
const line03V = {
    hidden: { rotate: 75, x:-20, y: 80 },
    visible: {
        x: [20, 0, 0, 0,-20],
        y: [80, 0, 0, 0, -80],
        rotate: 75,
        transition: {
            duration: 4,
            delay:0.25,
            times: [0.1, 0.2, 0.2, 0.925, 0.975],
            loop: Infinity,
        }
    }
}
const wrpperV = {
    hidden: {y: 0},
    visible: {y: "-10px", transition: {duration:1, delay:2.75, ease: "easeOut", loop: Infinity, reapeatDelay: 4 }}
}

const ArrowBottom = () => {
    return (
        <>
            <Wrapper
                variants={wrpperV}
                initial="hidden"
                animate="visible"
            >
                <Line01
                    variants={line01V}
                    initial="hidden"
                    animate="visible"
                />
                <Line02
                    variants={line02V}
                    initial="hidden"
                    animate="visible"
                />
                <Line03
                    variants={line03V}
                    initial="hidden"
                    animate="visible"
                />
            </Wrapper>
        </>
    )
}

export default ArrowBottom
