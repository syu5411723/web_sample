import { motion } from 'framer-motion'
import { VFC } from 'react'
import styled from 'styled-components'


const BeforeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
    position:fixed;
    top:0;
    left: 0;
    z-index: 1;
`

const contaienrV = {
    hidden: { x: "100vw" },
    visible: { x: "0vw", transition: { duration: 1, delay: 0.5 } }
}
const AfterContainer = styled(motion.div) <Props>`
    position:fixed;
    top:0;
    left: 100;
    width:100vw;
    height: 100vh;
    z-index:10;
    background-color:${({ page }) =>
        page === "wedo" && "#000" ||
        page === "weare" && "#fff"
    };

`
type Props = {
    page: string
}

const PageBlack: VFC<Props> = ({ page }) => {
    return (
        <>
            <BeforeContainer />
            {page === "wedo" && (
                <>
                    <AfterContainer
                        page={page}
                        variants={contaienrV}
                        initial="hidden"
                        animate="visible"
                    />
                </>
            ) || page === "weare" && (
                <>
                <AfterContainer
                    page={page}
                    variants={contaienrV}
                    initial="hidden"
                    animate="visible"
                />
            </>
            ) || page === "home" &&  null}


        </>
    )
}

export default PageBlack
