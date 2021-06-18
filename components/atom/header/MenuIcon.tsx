import { motion } from 'framer-motion'
import styled from 'styled-components'

const Wrapper = styled.div``
const Line01 = styled(motion.div)`
    width: 10px;
    height: 2px;
    border-radius:5px;
    background-color:#333;
    transform: translate(-10px, -5px) rotate(-45deg);
`
const Line02 = styled(motion.div)`
    width: 20px;
    height: 2px;
    border-radius:5px;
    background-color:#333;
    transform: translate(-10px, -2px) rotate(-45deg);
`
const Line03 = styled(motion.div)`
    width: 10px;
    height: 2px;
    border-radius:5px;
    background-color:#333;
    transform: translate(0px, 2px) rotate(-45deg);
`

const MenuIcon = () => {
    return (
        <>
            <Wrapper>
                <Line01 />
                <Line02 />
                <Line03 />
            </Wrapper>
        </>
    )
}

export default MenuIcon
