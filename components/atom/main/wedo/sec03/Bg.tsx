import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
const wrapperV = {
    hidden: { x: "90vw" },
    visible: { x: "0", transition: { duration: 0.4, delay: 0.7 } }
}

const Bg = () => {
    const [ref, inView] = useInView({
        rootMargin: "-100px 0px",
        triggerOnce: true,
    })
    return (
        <>
            <Container>
                <Wrapper
                    ref={ref}
                    variants={wrapperV}
                    animate={inView ? "visible" : "hidden"}
                >
                    <Left />
                    <Right />
                </Wrapper>
            </Container>
        </>
    )
}

export default Bg
