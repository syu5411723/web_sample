import React, { VFC } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

import Text01 from "../../../atom/main/design/Text01"
import Text02 from "../../../atom/main/design/Text02"
import { useInView } from 'react-intersection-observer'

const TextWrapper = styled(motion.div)`
    width: 500px;
    line-height: 50px;
`
const TextInner = styled(motion.div)``
// const text01V = {
//     hidden: {opacity: 0, x: "-30px"},
//     visible: {opacity: 1, x: "0px", transition: { type :"spring", stiffness : 100}}
// }
// const text02V = {
//     hidden: {opacity: 0, x: "-30px"},
//     visible: {opacity: 1, x: "0px", transition: { type :"spring", stiffness : 100, delay: 0.4}}
// }
type Props = {
    text01:string
    text02: string
    text03: string
    text04: string
    primary: boolean 
}

const MainThumb:VFC<Props> = ({ text01, text02, text03, text04, primary }) => {
    return (
        <>
            <TextWrapper>
                <TextInner>
                    <Text01 primary={primary} text={text01} />
                </TextInner>
                <TextInner>
                    <Text02 primary={primary} text={text02} span={false} />
                    <Text02 primary={primary} text={text03} span={false} />
                    <Text02 primary={primary} text={text04} span={false} />
                </TextInner>
            </TextWrapper>
        </>
    )
}

export default MainThumb