import { VFC, useEffect, useContext } from 'react'
import {  } from 'react'
import { useDistortionEffectCarousel } from "distortion-effect-carousel"
import styled from 'styled-components'

import { TimeContext } from '../../../Layout'

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
    speed:number
}

const SwiperImage: VFC<Props> = ({ images, displacmentImage, speed }) => {
    const { ref, next, prev, } = useDistortionEffectCarousel({ images, displacmentImage, speed });
    const {time } = useContext(TimeContext)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (time) {
                prev()
            } 
        }, 4000)
        return () => clearTimeout(timer);
    });
    return (
        <>
            <ImageContainer>
                <ImageWrapper ref={ref} />
            </ImageContainer>
        </>
    )
}

export default SwiperImage
