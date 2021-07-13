import styled from "styled-components"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion, useViewportScroll, useTransform } from "framer-motion"

import { Movie, ContentItem } from "../../../atom/main/wedo/sec04/index"
import ThumbLink from "../../../molecule/main/wedo/sec04/ThumbLink"
import ImgSec from "../../../atom/main/design/ImgSec"
import MainThumb from "../../../molecule/main/design/MainThumb"

const Container = styled.div`
    margin-top: 400px;
`
const ContentInner = styled.div`
    margin-top: 130px;
    margin-bottom: 200px;
`
const Inner = styled.div`
    position:relative;
    width:87%;
    margin:0 auto;
`
const ContentWrapper = styled.div`
    display:flex;
    margin-top: -7vw;
`
const RightWrapper = styled.div`
    position:relative;
    width:40%;
`
const LeftWrapper = styled(motion.div)`
    width:65%;
    margin-top:-10vw;
`


const Sec04 = () => {
    const [ref, inView] = useInView({
        rootMargin: "-200px 0px",
        triggerOnce: true,
    })
    const { scrollYProgress } = useViewportScroll()
    const y = useTransform(scrollYProgress, [0.44, 0.64], [0, 200])
    return (
        <>
            <Container>
                <Inner>
                    <ThumbLink />
                    <ContentInner>
                        <ContentItem content="企業、製品、サービスが持つべき目標・戦略・思考といった目には見えない要素の構築と、それを具体的なアウトプットへと昇華させるプロセスをトータルでサポートします。私達はアナログとデジタル、そのどちらの専門家でもあります。手段を狭めることなく、目的の為の最善な道が何処にあるのか、ブレる事無くご提案することが可能です" />
                    </ContentInner>
                </Inner>
                <ImgSec page={false} img="/images/what_01.jpg" primary={true} />
                <Inner>
                    <ContentWrapper>
                        <LeftWrapper
                            style={{ y: y }}
                        >
                            <MainThumb text01="WHAT IS BRANDING" text02="WE PROVIDE" text03="SENSUOUS" text04="EXPERIENCE" primary={false} />
                            <div ref={ref} >
                                <ContentItem content="私達が考えるブランディングとは「伝える」こと。そして、ただ伝えるだけではなく、大切にしているのが「人の五感を揺さぶる体験を提供する」こと。近年、デザインやブランディングの重要性が認知され始めましたが、まだまだ表面的な表現に留まってしまっている企業やサービス、製品が多いのが現状です" />
                                <ContentItem content="私達は見栄えの良さだけにこだわるのではなく、まだ見ぬ誰かにきちんと「伝わる」アウトプットを心がけています。そしてその先にある、人の感情に訴え、行動を喚起する体験をデザインする「センシュアスデザイン」という考え方を重視しています" />
                                <ContentItem content="ただ体験して終わるのではなく、思わず誰かに「伝えたくなる」体験作りを常に目指しています。" />
                            </div>
                        </LeftWrapper>
                        <RightWrapper>
                            <Movie />
                        </RightWrapper>
                        <div style={{ position: "absolute", zIndex: 100 }} >
                            <Image src="/images/what_we_do.mp4" width={100} height={400} />
                        </div>
                    </ContentWrapper>
                </Inner>
            </Container>
        </>
    )
}

export default Sec04
