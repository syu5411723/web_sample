import { VFC, useEffect, useContext } from 'react'
import { } from 'react'
import { useDistortionEffectCarousel } from "distortion-effect-carousel"
import styled from 'styled-components'

import { TimeContext } from '../../../Layout'

const ImageWrapper = styled.div`
    width:100%;
    height: 100%;
`

type Props = {
    images: string[]
    displacmentImage: string
    speed: number
}

const SwiperImage: VFC<Props> = ({ images, displacmentImage, speed }) => {
    const { ref, next, prev, } = useDistortionEffectCarousel({ images, displacmentImage, speed });
    const { time } = useContext(TimeContext)
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
            <ImageWrapper ref={ref} />
        </>
    )
}

export default SwiperImage
