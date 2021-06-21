import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import MainThumb from '../../../molecule/main/design/MainThumb'
import Bg from '../../../atom/main/weare/sec04/Bg'
import Person from '../../../molecule/main/design/Person'
import ProfileContet from '../../../atom/main/weare/sec04/ProfileContet'
import { personData } from "./PersonData"


const ThumbWrapper = styled(motion.div)``
const Wrapper = styled.div`
    position: relative;
    width:100vw;
    height: 400px;
`
const ProfileWrapper = styled.div`
    width:80vw;
    max-width:800px;
    margin: 0 auto;
`

const Sec04 = () => {
    return (
        <>
            <Bg />
            <MainThumb text01="OUR TEAM" text02="WISDOM OF" text03="CROEDS" />
            <Wrapper>
                <Person name="MAEKWA-SYUKI" img="/images/amagawa.jpg" info="CIO" />
            </Wrapper>
            <ProfileWrapper>
                <ProfileContet content="1986年生まれ。大阪府出身。2010年よりフリーのクリエイティブ・ディレクターとして独立。大手企業からスタートアップまで、数々のWebサービスやアプリ、アパレルブランドなどの事業立ち上げに携わる。異分野のクリエイターが集まり、自由にモノツクリできる場を創るため、2013年にSuper Crowdsを創業。" />
            </ProfileWrapper>
        </>
    )
}

export default Sec04
