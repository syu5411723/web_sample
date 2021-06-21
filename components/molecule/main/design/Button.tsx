import styled from "styled-components"
import { motion } from "framer-motion"
import { useState, VFC } from "react"

import ButtonText from "../../../atom/main/design/ButtonText"
import ButtonArrow from "../../../atom/main/design/ButtonArrow"
import ButtonBg from "../../../atom/main/design/ButtonBg"
import ButtonImg from "../../../atom/main/design/ButtonImg"

type Size = {
    small: boolean
}

const Container = styled.div<Size>`
    position:relative;
    width: ${({ small }) => small ? "310px" : "100vw"};
    height: ${({ small }) => small ? "310px" : "300px"};
    margin: 0 auto;
    cursor: pointer;

`
const BottonContainer = styled.div<Size>`
    background-color:#000;
    width:${({ small }) => small ? "75%" : "100%"};
    height: ${({ small }) => small ? "75%" : "100%"};
    cursor: pointer;
    position:relative;
    z-index:1;
    overflow: hidden;

`
const ButtonInner = styled.div<Size>`
    overflow:hidden;
    width:${({ small }) => small ? "70%" : "370px"};
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
    closed: { x: "-30%", transition: { duration: 0.4 } },
    open: { x: "8%", transition: { duration: 0.4 } }
}
const arrowV02 ={
    closed: { x: "-17%", transition: { duration: 0.4 } },
    open: { x: "1%", transition: { duration: 0.4 } }
}

type Props = {
    text: string
    ButtonBool: boolean
    small: boolean
}

const Button: VFC<Props> = ({ text, ButtonBool, small }) => {
    const [isOpen, setOpen] = useState(false);
    const handleChange = () => setOpen(!isOpen);
    return (
        <>
            <Container small={small}>
                {ButtonBool && (
                    <ButtonImg isOpen={isOpen} />
                )}
                <BottonContainer
                    small={small}
                    onMouseEnter={handleChange}
                    onMouseLeave={handleChange}
                >
                    <ButtonBg isOpen={isOpen} />
                    <ButtonInner small={small}>
                        {small ? (
                            <ButtonWrapper
                                variants={arrowV}
                                animate={isOpen ? "open" : "closed"}
                            >
                                <ButtonArrow before={true} />
                                <ButtonText text={text} small={small} />
                                <ButtonArrow before={false} />
                            </ButtonWrapper>
                        ) : (
                            <ButtonWrapper
                                variants={arrowV02}
                                animate={isOpen ? "open" : "closed"}
                            >
                                <ButtonArrow before={true} />
                                <ButtonText text={text} small={small} />
                                <ButtonArrow before={false} />
                            </ButtonWrapper>
                        )}

                    </ButtonInner>
                </BottonContainer>
            </Container>
        </>
    )
}

export default Button
