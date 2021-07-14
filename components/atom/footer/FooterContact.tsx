import { motion } from "framer-motion"
import { VFC } from "react"
import styled from "styled-components"


const Wrapper = styled(motion.div)`
    color: #555;
    cursor: pointer;
`
const Text = styled.p`
    font-size: 13px;
`
const textV = {
    hover: { color: "#fff", transition: { duration: 0.5 } }
}
const textSubV = {
    hover: { color: "#000", transition: { duration: 0.5 } }
}

type Props = {
    primary: boolean
}
const FooterContact: VFC<Props> = ({ primary }) => {
    return (
        <>
            {primary ? (
                <Wrapper
                    variants={textSubV}
                    whileHover="hover"
                >
                    <Text>CONTACT US</Text>
                </Wrapper>
            ) : (
                <Wrapper
                    variants={textV}
                    whileHover="hover"
                >
                    <Text>CONTACT US</Text>
                </Wrapper>
            )}
        </>
    )
}

export default FooterContact
