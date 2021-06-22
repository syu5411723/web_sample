﻿import styled from "styled-components"
import { Movie, Content } from "../../../atom/main/wedo/sec04/index"
import ThumbLink from "../../../molecule/main/wedo/sec04/ThumbLink"
import ImgSec from "../../../atom/main/design/ImgSec"
import MainThumb from "../../../molecule/main/design/MainThumb"


const ContentInner = styled.div`
    margin-top: 90px;
`
const Container = styled.div`

`
const Inner = styled.div`
    position:relative;
    width:87%;
    margin:0 auto;
`
const ContentWrapper = styled.div`
    display:flex;
`
const RightWrapper = styled.div`
    position:relative;
    width:40%;
`
const LeftWrapper = styled.div`
    width:65%;
`

const Sec04 = () => {
    return (
        <>
            <Container>
                <Inner>
                    <ThumbLink />
                    <ContentInner>
                        <Content content="企業、製品、サービスが持つべき目標・戦略・思考といった目には見えない要素の構築と、それを具体的なアウトプットへと昇華させるプロセスをトータルでサポートします。私達はアナログとデジタル、そのどちらの専門家でもあります。手段を狭めることなく、目的の為の最善な道が何処にあるのか、ブレる事無くご提案することが可能です" />
                    </ContentInner>
                </Inner>
                <ImgSec page={false} img="/images/what_01.jpg" primary={true} />
                <Inner>
                    <ContentWrapper>
                        <LeftWrapper>
                            <MainThumb text01="WHAT IS BRANDING" text02="WE PROVIDE" text03="SENSUOUS" text04="EXPERIENCE" primary={false} />
                            <Content content="私達が考えるブランディングとは「伝える」こと。そして、ただ伝えるだけではなく、大切にしているのが「人の五感を揺さぶる体験を提供する」こと。近年、デザインやブランディングの重要性が認知され始めましたが、まだまだ表面的な表現に留まってしまっている企業やサービス、製品が多いのが現状です" />
                            <Content content="私達は見栄えの良さだけにこだわるのではなく、まだ見ぬ誰かにきちんと「伝わる」アウトプットを心がけています。そしてその先にある、人の感情に訴え、行動を喚起する体験をデザインする「センシュアスデザイン」という考え方を重視しています" />
                            <Content content="ただ体験して終わるのではなく、思わず誰かに「伝えたくなる」体験作りを常に目指しています。" />
                        </LeftWrapper>
                        <RightWrapper>
                            <Movie />
                        </RightWrapper>
                    </ContentWrapper>
                </Inner>
            </Container>
        </>
    )
}

export default Sec04
