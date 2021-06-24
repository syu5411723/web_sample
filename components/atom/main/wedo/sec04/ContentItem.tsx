import { motion } from "framer-motion"
import { VFC } from "react"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

const Wrapper = styled(motion.div)``

const ContentText = styled.p`
    color: #fff;
    font-size: 13px;
    line-height:30px;
`
type Props = {
    content: string
    delay: number
    inView: boolean
    primary: boolean
}

const ContentItem: VFC<Props> = ({ content, delay, inView, primary }) => {
    const wrappeV = {
        hidden: { opacity: 0, y: "40px" },
        visible: { opacity: 1, y: "0", transition: { type: "spring", stiffness: 100, delay: `${delay}` } }
    }

    return (
        <>
            {primary ? (
                <>
                    <ContentText>{content}</ContentText>
                </>
            ) : (
                <>
                    <Wrapper
                        variants={wrappeV}
                        animate={inView ? "visible" : "hidden"}
                    >
                        <ContentText>{content}</ContentText>
                    </Wrapper >
                </>
            )}

        </>
    )
}

export default ContentItem
