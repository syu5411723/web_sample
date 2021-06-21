import { motion, useTransform, useViewportScroll } from "framer-motion"
import { VFC } from "react"
import styled from "styled-components"

const NameWrapper = styled(motion.div)`
    position:absolute;
    top: 50px;
    left: 100px;
    z-index: 2;
`
const Text = styled.h2`
    font-size:30px;
`
type Props = {
    name: string
}

const Name:VFC<Props> = ({ name }) => {
    const { scrollYProgress } = useViewportScroll();
    const y = useTransform(scrollYProgress, [0.26, 0.4], [0, -110])
    return (
        <>
            <NameWrapper
                style={{y: y}}
            >
                <Text>
                    {name}
                </Text>
            </NameWrapper>

        </>
    )
}

export default Name
