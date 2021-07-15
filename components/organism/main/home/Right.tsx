import React from 'react'
import Link from 'next/link'
import styled from "styled-components"

import AnimateLine from '../../../atom/main/right/AnimateLine'
import SideBg from '../../../atom/main/right/SideBg'
import { TimeContext } from '../../../Layout'
import MainRight from '../../../molecule/main/MainRight'

const Links = styled(Link)`
    color: #333;
`
const Inner = styled.a``

type ContextProps = {
    open: boolean
    handleChange: () => void
}
export const RightContext = React.createContext({} as ContextProps);

type Props = {
    home:boolean
}

const Right = ({home}) => {
    const [open, setOpen] = React.useState(false);
    const handleChange = () => {
        setOpen(!open)
    }
    const { time } = React.useContext(TimeContext);
    return (
        <>
            <RightContext.Provider value={{ open, handleChange }} >
                <SideBg
                    isOpen={open}
                />
                <AnimateLine isOpen={open} />
                <Links href="/page/wedo" scroll={false}>
                    <Inner>
                        {home ? (
                            <MainRight time={time} />
                        ): (
                            <MainRight time={true} />
                        )}

                    </Inner>
                </Links>
            </RightContext.Provider>
        </>
    )
}

export default Right