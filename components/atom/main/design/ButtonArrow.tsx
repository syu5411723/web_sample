import { motion } from "framer-motion"
import { VFC } from "react"
import styled from "styled-components"

const ArrowWrapper = styled.div`
    margin-right: ${(before) => before ? "10px" : "0px"};
    margin-left: ${(before) => before ? "10px" : "20px" };
    margin-top: 5px;
`
const Line = styled.div`
    width:60px;
    height:1px;
    background-color: #fff;
`
const Arrow = styled.div<Props>`
width:10px;
height:1px;
transform: rotate(45deg) translate(33px, -39px);
background-color: #fff;
`
type Props = {
    before : boolean 
}


const ButtonArrow:VFC<Props> = ({before}) => {
    return (
        <>
            <ArrowWrapper>
                <Line />
                <Arrow before={before} />
            </ArrowWrapper>
        </>
    )
}

export default ButtonArrow
