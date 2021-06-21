import styled from "styled-components"
import { motion } from "framer-motion"
import { useState } from "react"

import ButtonText from "../../../atom/main/design/ButtonText"
import ButtonArrow from "../../../atom/main/design/ButtonArrow"
import ButtonBg from "../../../atom/main/design/ButtonBg"
import ButtonImg from "../../../atom/main/design/ButtonImg"

const Container = styled.div`
    position:relative;
    width:250px;
    height: 250px;
    margin: 0 auto;
    cursor: pointer;

`
const BottonContainer = styled.div`
    background-color:#000;
    width:200px;
    height: 200px;
    cursor: pointer;
    position:relative;
    z-index:1;
    overflow: hidden;

`
const ButtonInner = styled.div`
    overflow:hidden;
    width:70%;
    height:100%;
    margin:0 auto;
    display:flex;
    align-items:center;
`
const ButtonWrapper = styled(motion.div)`
    display:flex;
    align-items:center;
    z-index:3;

`
const arrowV = {
    closed: { x: "-35%", transition: { duration: 0.4 } },
    open: { x: "-5%", transition: { duration: 0.4 } }
}

const Button = ({ text }) => {
    const [isOpen, setOpen] = useState(false);
    const handleChange = () => setOpen(!isOpen);
    return (
        <>
        <Container>
            <ButtonImg isOpen={isOpen} />
            <BottonContainer
                onMouseEnter={handleChange}
                onMouseLeave={handleChange}
            >
                <ButtonBg isOpen={isOpen} />
                <ButtonInner>
                    <ButtonWrapper
                        variants={arrowV}
                        animate={isOpen ? "open" : "closed"}
                    >
                        <ButtonArrow before={true} />
                        <ButtonText text={text} />
                        <ButtonArrow before={false} />
                    </ButtonWrapper>
                </ButtonInner>
            </BottonContainer>
            </Container>
        </>
    )
}

export default Button
