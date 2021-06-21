import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

import Text01 from "../../../atom/main/design/Text01"
import Text02 from "../../../atom/main/design/Text02"

const TextWrapper = styled(motion.div)`
    width: 500px;
    line-height: 50px;
    margin-left: 100px;
`

const MainThumb = ({text01, text02, text03}) => {
    return (
        <>
            <TextWrapper>
                <Text01 text={text01} />
                <Text02 text={text02} span={false} />
                <Text02 text={text03} span={false} />
            </TextWrapper>
        </>
    )
}

export default MainThumb