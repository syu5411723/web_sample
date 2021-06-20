import { VFC } from "react"
import Image from "next/image"
import styled from "styled-components"

const TextInner = styled.div``

const Text = styled.h1`
    font-size: 50px;
    font-weight:lighter;
`

type Props = {
    text: string
    span: boolean
}
const Text02: VFC<Props> = ({ text, span }) => {
    return (
        <>
            <TextInner>
                {span && (
                    <>
                        {/* <Image src="/images/motion_letter.svg" width={200} height={100}  /> */}
                        <Text>{text}</Text>
                    </>
                )}
                {!span && <Text>{text}</Text>}

            </TextInner>
        </>
    )
}

export default Text02
