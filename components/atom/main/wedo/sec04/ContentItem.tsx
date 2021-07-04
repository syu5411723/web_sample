import { motion } from "framer-motion"
import { VFC } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

const Wrapper = styled(motion.div)``

const ContentText = styled.p`
    color: #fff;
    font-size: 13px;
    line-height:30px;
    margin-bottom: 15px;
`
type Props = {
    content: string
}

const ContentItem: VFC<Props> = ({ content }) => {
    return (
        <>
            <ContentText>{content}</ContentText>
        </>
    )
}

export default ContentItem
