import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import MainThumb from '../../../molecule/main/design/MainThumb'
import Bg from '../../../atom/main/weare/sec04/Bg'
import Person from '../../../molecule/main/design/Person'
import {personData} from "./PersonData"


const ThumbWrapper = styled(motion.div)``

const Sec04 = () => {
    return (
        <>
            <Bg />
            <MainThumb text01="OUR TEAM" text02="WISDOM OF" text03="CROEDS" />
            <Person name="syuko" img="/images/amagawa.jpg" />
        </>
    )
}

export default Sec04
