import { useRouter } from "next/router"
import Link from "next/link"
import styled from "styled-components"
import { motion } from "framer-motion"

const Wrapper = styled(motion.div)``

const wrapperV = {
    hidden: {opacity: 0, x: "-50px"},
    visible: {opacity: 1, x: "0px", transition: {duration:1, delay:0.5} },
    exit: {opacity: 0, x: "50px", transition: {duration: 1, delay:0.5}}
}
const Content = () => {
    const router = useRouter();
    return (
        <>
            <Wrapper
                variants={wrapperV}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
            <Link href="/" >Back To Home</Link>
            <h1></h1>
            <p>挨拶</p>
            </Wrapper>
        </>
    )
}

export default Content
