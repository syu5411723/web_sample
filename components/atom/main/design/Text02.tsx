import { VFC } from "react"
import Image from "next/image"
import styled from "styled-components"

const TextInner = styled.div``

const Text = styled.h1<Color>`
    font-size: 50px;
    font-weight:lighter;
    color: ${({primary}) => primary ? "#000" : "#fff"};
`
type Color ={
    primary: boolean
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
                {span && (
                    <>
                        {/* <Image src="/images/motion_letter.svg" width={200} height={100}  /> */}
                        <Text primary={primary}>{text}</Text>
                    </>
                )}
                {!span && <Text primary={primary}>{text}</Text>}

            </TextInner>
        </>
    )
}

export default Text02
