import { VFC } from "react"
import styled from "styled-components"

import MotionText from "../weare/sec01/MotionText"

const TextInner = styled.div`
    position:relative;

`

const Text = styled.h1<Style>`
    font-size: 55px;
    font-weight:lighter;
    color: ${({ primary }) => primary ? "#000" : "#fff"};
    margin-top: ${({span}) => span ? "25px" : "10px"};
    margin-left: ${({span}) => span ? "185px" : "0"};
`
type Style = {
    primary: boolean
    span: boolean
}
type Props = {
    text: string
    span: boolean
    primary: boolean
}

const Text02: VFC<Props> = ({ text, span, primary }) => {
    return (
        <>
            <TextInner>
                {span ? (
                    <>
                        <MotionText />
                        <Text span={span} primary={primary}>{text}</Text>
                    </>
                ) : (
                    <Text span={false} primary={primary}>{text}</Text>
                )}
            </TextInner>
        </>
    )
}

export default Text02
