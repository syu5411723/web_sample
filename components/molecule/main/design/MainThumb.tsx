import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

import Text01 from "../../../atom/main/design/Text01"
import Text02 from "../../../atom/main/design/Text02"

const TextWrapper = styled(motion.div)`
    width: 500px;
    line-height: 50px;
`

const MainThumb = ({text01, text02, text03, text04 , primary}) => {
    return (
        <>
            <TextWrapper>
                <Text01 primary={primary} text={text01} />
                <Text02 primary={primary} text={text02} span={false} />
                <Text02 primary={primary} text={text03} span={false} />
                <Text02 primary={primary} text={text04} span={false} />
            </TextWrapper>
        </>
    )
}

export default MainThumb