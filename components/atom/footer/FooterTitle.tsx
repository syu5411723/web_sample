import styled from "styled-components"
import { motion } from "framer-motion"
import { VFC } from "react"
import { Props } from "framer-motion/types/types"

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
const textSubV = {
    hover: { color: "#000", transition: { duration: 0.5 } }
}
type Prpos = {
    primary: boolean
}

const FooterTitle: VFC<Props> = ({ primary }) => {
    return (
        <>
            {primary ? (
                <Wrappper
                    variants={textSubV}
                    whileHover="hover"
                >
                    <Span>&copy;</Span>
                    <Text>2021&nbsp;Super&nbsp;Crowds&nbsp;Inc</Text>
                </Wrappper>

            ) : (
                <Wrappper
                    variants={textV}
                    whileHover="hover"
                >
                    <Span>&copy;</Span>
                    <Text>2021&nbsp;Super&nbsp;Crowds&nbsp;Inc</Text>
                </Wrappper >
            )}

        </>
    )
}

export default FooterTitle
