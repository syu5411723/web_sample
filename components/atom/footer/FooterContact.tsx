import { motion } from "framer-motion"
import styled from "styled-components"

const Wrapper = styled(motion.div)`
    color:#383838;
    cursor: pointer;

`
const Text = styled.p`
    font-size: 13px;
`
const textV = {
    hover: {color: "#fff" , transition: {duration: 0.5}}
}


const FooterContact = () => {
    return (
        <>
            <Wrapper
                variants={textV}
                whileHover="hover"
            >
                <Text>CONTACT US</Text>
            </Wrapper>
        </>
    )
}

export default FooterContact
