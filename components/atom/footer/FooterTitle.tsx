import styled from "styled-components"
import { motion } from "framer-motion"

const Wrappper = styled(motion.div)`
    display:flex;
    align-items:center;
    color:#383838;
    cursor: pointer;
`
const Text = styled.p`
    font-size: 13px;
`
const Span = styled.p`
    font-size: 22px;
    margin-right: 5px;
`

const textV = {
    hover: { color: "#fff", transition: { duration: 0.5 } }
}



const FooterTitle = () => {
    return (
        <>
            <Wrappper
                variants={textV}
                whileHover="hover"
            >
                <Span>&copy;</Span>
                <Text>2021&nbsp;Super&nbsp;Crowds&nbsp;Inc</Text>
            </Wrappper>
        </>
    )
}

export default FooterTitle
