import { motion } from "framer-motion"
import { VFC } from "react"
import styled from "styled-components"

type Before = {
    before: boolean
}
const ArrowWrapper = styled.div<Before>`
    margin-right: ${({before}) => before ? "10px" : "0px"};
    margin-left: ${({before}) => before ? "0px" : "10px" };
    margin-top: 5px;
`
const Line = styled.div`
    width:65px;
    height:1px;
    background-color: #fff;
`
const Arrow = styled.div`
    width:10px;
    height:1px;
    transform: rotate(45deg) translate(36px, -43px);
    background-color: #fff;
`
type Props = {
    before : boolean 
}


const ButtonArrow:VFC<Props> = ({before}) => {
    return (
        <>
            <ArrowWrapper before={before}>
                <Line />
                <Arrow />
            </ArrowWrapper>
        </>
    )
}

export default ButtonArrow
