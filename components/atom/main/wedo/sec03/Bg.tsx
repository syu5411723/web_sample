import { motion } from "framer-motion"
import styled from "styled-components"


const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:flex-end;
`
const Wrapper = styled(motion.div)`
    width: 90vw;
    height:40vw;
    display:flex;
`
const Left = styled.div`
    background-color: #6EA2FA;
    width:90%;
    height:100%;
`
const Right = styled.div`
    background-color: #F49D45;
    width:10%;
    height:100%;
`


const Bg = () => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Left />
                    <Right />
                </Wrapper>
            </Container>
        </>
    )
}

export default Bg
