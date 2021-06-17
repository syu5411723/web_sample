import { motion } from 'framer-motion'
import React, { VFC } from 'react'
import styled from 'styled-components'
import Link from "next/link"

const LinkWrapper = styled(motion.div)`

`
const Links = styled.a`
    cursor: pointer;
`
type Props = {
    id: string
}
const wrapperV = {
    hidden: { opacity: 0, x: "-50px" },
    visible: { opacity: 1, x: "0px", transition: { duration: 1, delay: 0.5 } },
    exit: { opacity: 0, x: "50px", transition: { duration: 1, delay: 0.5 } }
}

const LinkPage: VFC<Props> = ({ id }) => {
    return (
        <>
            <LinkWrapper
                variants={wrapperV}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Link href="/posts/[id]" as={`/posts/${id}`}><Links>From {id}</Links></Link>
            </LinkWrapper>
        </>
    )
}

export default LinkPage
