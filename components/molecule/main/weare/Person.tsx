import styled from "styled-components"
import { motion, useTransform, useViewportScroll } from "framer-motion"

import { Name, Card, Info } from "../../../atom/main/weare/sec04/index"
import { personData } from "./PersonData"

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

const Person = () => {
    const { scrollYProgress } = useViewportScroll();
    const name01 = useTransform(scrollYProgress, [0.34, 0.5], [0, -100])
    const info01 = useTransform(scrollYProgress, [0.35, 0.52], [0, -60])
    const YData = [
        {
            nameY: name01
        },
        {
            nameY: name01
        },
        {
            nameY: name01
        },
        {
            nameY: name01
        },
        {
            nameY: name01
        },
    ]
    return (
        <>
            {personData.map((data) => (
                <>
                    {YData.map((Ydata) => (
                        <Wrapper>
                            <NameWrapper
                                style={{y: `${Ydata.nameY}` }}
                            >
                                <Name name={data.name} />
                            </NameWrapper>
                            <Card img={data.img} />
                            <Info info={data.info} />
                        </Wrapper>

                    ))}

                </>
            ))}

        </>
    )
}

export default Person
