import { motion } from 'framer-motion'
import React, {VFC} from 'react'
import styled from 'styled-components'
import Link from "next/link"

const LinkWrapper = styled(motion.div)`

`
const Links = styled.a`
    cursor: pointer;
`
type Props ={
    id:string
}

const LinkPage:VFC<Props> = ({id}) => {
    return (
        <>
            <LinkWrapper>
                <Link href="/posts/[id]" as={`/posts/${id}`}><Links>From {id}</Links></Link>
            </LinkWrapper>
        </>
    )
}

export default LinkPage
