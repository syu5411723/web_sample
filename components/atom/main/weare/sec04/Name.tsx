import { motion, useTransform, useViewportScroll } from "framer-motion"
import { VFC } from "react"
import styled from "styled-components"

const NameWrapper = styled(motion.div)`
    position:absolute;
    top: 30%;
    left: 10%;
    z-index: 2;
`
const Text = styled.h2`
    font-size:30px;
`
type Props = {
    name: any
}

const Name: VFC<Props> = ({ name }) => {

    return (
        <>
            <Text>{name}</Text>
        </>
    )
}

export default Name
