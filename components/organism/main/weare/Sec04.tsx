import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

import MainThumb from '../../../molecule/main/design/MainThumb'
import Bg from '../../../atom/main/weare/sec04/Bg'
import Person from '../../../molecule/main/design/Person'
import ProfileContet from '../../../atom/main/weare/sec04/ProfileContet'
import Button from '../../../molecule/main/design/Button'
import { personData } from "./PersonData"


const Container = styled.div`
    height:100%;
    width:100%;
    position :relative;
    padding-bottom: 300px;
`
const ThumbWrapper = styled(motion.div)``
const Wrapper = styled.div`
    position: relative;
    width:100vw;
    height: 53vw;
    margin-top: 200px;
`
const ProfileWrapper = styled.div`
    width:80vw;
    max-width:800px;
    margin: 0 auto;
`

const Sec04 = () => {
    return (
        <>
            <Container>
                <Bg />
                <MainThumb text01="OUR TEAM" text02="WISDOM OF" text03="CROEDS" />
                {personData.map((data) => (
                    <>
                        <Wrapper>
                            <Person name={data.name} img={data.img} info={data.info} />
                        </Wrapper>
                        <ProfileWrapper>
                            <ProfileContet content={data.content} />
                        </ProfileWrapper>
                    </>
                ))}
                <Button text="CAREER"/>
            </Container>
        </>
    )
}

export default Sec04
