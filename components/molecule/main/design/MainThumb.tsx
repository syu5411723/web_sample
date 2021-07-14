import React, { VFC } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

import { Text01, Text02, Text03 } from "../../../atom/main/design/thumbnail"

const TextWrapper = styled(motion.div)`
    width: 500px;
    line-height: 50px;
    margin-bottom: 30px;
`
const TextInner = styled(motion.div)``

type Props = {
    text01: string
    text02: string
    text03: string
    text04: string
    text05:string
    primary: boolean
    span: boolean
}

const MainThumb: VFC<Props> = ({ text01, text02, text03, text04, text05,primary, span }) => {

    return (
        <>
            <TextWrapper>
                <TextInner>
                    <Text01 primary={primary} text={text01} />
                </TextInner>
                <TextInner>
                        <Text02 primary={primary} text={text02} span={false} />
                        <Text02 primary={primary} text={text03} span={span} />
                        <Text02 primary={primary} text={text04} span={false} />
                </TextInner>
                <Text03 text={text05} />
            
            </TextWrapper>
        </>
    )
}

export default MainThumb