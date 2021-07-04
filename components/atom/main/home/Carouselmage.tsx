import { VFC, useEffect } from 'react'
import { useDistortionEffectCarousel } from "distortion-effect-carousel"
import styled from 'styled-components'

const ImageContainer = styled.div`
    width:80%;
    height:85%;
    position:absolute;
    z-index:20;
    margin-top: 5vh;
    border-radius: 5px;
`

const ImageWrapper = styled.div`
    width:100%;
    height: 100%;
`

type Props = {
    images: string[]
    displacmentImage: string
}

const SwiperImage: VFC<Props> = ({ images, displacmentImage }) => {
    const { ref, next, prev } = useDistortionEffectCarousel({ images, displacmentImage });
    useEffect(() => {
        const timer = setTimeout(() => {
            prev()
        }, 4000)
        return () => clearTimeout(timer);
    })
    return (
        <>
            <ImageContainer>
                <ImageWrapper ref={ref} />
            </ImageContainer>
        </>
    )
}

export default SwiperImage
