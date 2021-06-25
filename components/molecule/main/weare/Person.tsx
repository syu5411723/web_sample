import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

import { Name, Card, Info } from "../../../atom/main/weare/sec04/index"
import PersonContent from "./PersonContent"
import { contentData01, contentData02, contentData03, contentData04, contentData05 } from "./ContnetData"

const Wrapper = styled.div`
    position: relative;
    width:100vw;
    height: 53vw;
    margin-top: 200px;
`
const NameWrapper = styled(motion.div)`
    position:absolute;
    top: 30%;
    left: 10%;
    z-index: 2;
`
const InfoWrapper = styled(motion.div)`
    position:absolute;
    top:70%;
    right:25%;
    z-index:1;
`

const Person = () => {
    const { scrollYProgress } = useViewportScroll();
    const name01 = useTransform(scrollYProgress, [0.4, 0.48], [0, -100])
    const info01 = useTransform(scrollYProgress, [0.42, 0.5], [0, -80])
    const name02 = useTransform(scrollYProgress, [0.49, 0.56], [0, -100])
    const info02 = useTransform(scrollYProgress, [0.51, 0.58], [0, -80])
    const name03 = useTransform(scrollYProgress, [0.58, 0.64], [0, -100])
    const info03 = useTransform(scrollYProgress, [0.6, 0.68], [0, -80])
    const name04 = useTransform(scrollYProgress, [0.66, 0.75], [0, -100])
    const info04 = useTransform(scrollYProgress, [0.7, 0.78], [0, -80])
    const name05 = useTransform(scrollYProgress, [0.75, 0.82], [0, -100])
    const info05 = useTransform(scrollYProgress, [0.77, 0.85], [0, -80])


    return (
        <>
            <Wrapper>
                <NameWrapper
                    style={{ y: name01 }}
                >
                    <Name name="syuki-maekawa" />
                </NameWrapper>
                <Card img="/public/images/who_06.png" />
                <InfoWrapper
                    style={{ y: info01 }}
                >
                    <Info info="ENGINNER" />
                </InfoWrapper>
            </Wrapper>
            <PersonContent content={contentData01} />
            <Wrapper>
                <NameWrapper
                    style={{ y: name02 }}
                >
                    <Name name="syuki-maekawa" />
                </NameWrapper>
                <Card img="/public/images/who_06.png" />
                <InfoWrapper
                    style={{ y: info02 }}
                >
                    <Info info="ENGINNER" />
                </InfoWrapper>
            </Wrapper>
            <PersonContent content={contentData02} />
            <Wrapper>
                <NameWrapper
                    style={{ y: name03 }}
                >
                    <Name name="syuki-maekawa" />
                </NameWrapper>
                <Card img="/public/images/who_06.png" />
                <InfoWrapper
                    style={{ y: info03 }}
                >
                    <Info info="ENGINNER" />
                </InfoWrapper>
            </Wrapper>
            <PersonContent content={contentData03} />
            <Wrapper>
                <NameWrapper
                    style={{ y: name04 }}
                >
                    <Name name="syuki-maekawa" />
                </NameWrapper>
                <Card img="/public/images/who_06.png" />
                <InfoWrapper
                    style={{ y: info04 }}
                >
                    <Info info="ENGINNER" />
                </InfoWrapper>
            </Wrapper>
            <PersonContent content={contentData04} />
            <Wrapper>
                <NameWrapper
                    style={{ y: name05 }}
                >
                    <Name name="syuki-maekawa" />
                </NameWrapper>
                <Card img="/public/images/who_06.png" />
                <InfoWrapper
                    style={{ y: info05 }}
                >
                    <Info info="ENGINNER" />
                </InfoWrapper>
            </Wrapper>
            <PersonContent content={contentData05} />
        </>
    )
}

export default Person
