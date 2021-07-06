import styled from 'styled-components'

import { AnimateText } from '../../../../atom/main/wedo/sec01'

const Wrapper = styled.div`
    text-align:center;
`

const Head = () => {
    return (
        <>
            <Wrapper>
                <AnimateText text01="W" text02="E" text03="" text04="C" text05="R" text06="E" text07="A" text08="T" text09="E" />
                <AnimateText text01="S" text02="E" text03="N" text04="S" text05="U" text06="S" text07="" text08="" text09="" />
                <AnimateText text01="D" text02="E" text03="S" text04="S" text05="I" text06="G" text07="N" text08="" text09="E" />
            </Wrapper>
        </>
    )
}

export default Head
