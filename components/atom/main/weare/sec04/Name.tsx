import { motion } from "framer-motion"
import { VFC } from "react"
import styled from "styled-components"

const NameWrapper = styled(motion.div)`
    position:absolute;
    top: 100px;
    left: 100px;
    z-index: 10;
`
const Text = styled.h2`
    font-size:20px;
`
type Props = {
    name: string
}

const Name:VFC<Props> = ({ name }) => {
    return (
        <>
            <NameWrapper>
                <Text>
                    {name}
                </Text>
            </NameWrapper>

        </>
    )
}

export default Name
