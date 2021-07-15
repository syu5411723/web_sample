import React, { VFC, useState } from 'react'
import Link from 'next/link'
import styled from "styled-components"

import AnimateLine from '../../../atom/main/left/AnimateLine'
import SideBg from '../../../atom/main/left/SideBg'
import { TimeContext } from '../../../Layout'
import MainLeft from '../../../molecule/main/MainLeft'

const Links = styled(Link)``
const Inner = styled.a``
type ContextProps = {
    open: boolean
    handleChange: () => void
}
export const SideContext = React.createContext({} as ContextProps);

type Props = {
    home: boolean
}

const Left: VFC<Props> = ({ home }) => {
    const [open, setOpen] = useState(false);
    const handleChange = () => {
        setOpen(!open);
    }
    const { time } = React.useContext(TimeContext);
    return (
        <>
            <SideContext.Provider value={{ open, handleChange }}>
                <SideBg
                    leftOpen={open}
                />
                <AnimateLine leftOpen={open} />
                <Links href="/page/weare" scroll={false}>
                    <Inner>
                        {home ? (
                            <MainLeft time={time} />
                        ) : (
                            <MainLeft time={true} />
                        )}
                    </Inner>
                </Links>
            </SideContext.Provider>
        </>
    )
}

export default Left