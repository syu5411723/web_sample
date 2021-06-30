import styled from "styled-components"
import CarouselImage from "../../../atom/main/home/Carouselmage"

const CarouselWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
`

const images = [
    './images/index_1.jpg',
    './images/index_2.jpg',
    './images/index_3.jpg',
]

const Swiper = () => {
    return (
        <>
            <CarouselWrapper>
                <CarouselImage images={images} displacmentImage="./images/displacementImages/2.jpg" />
            </CarouselWrapper>
        </>
    )
}

export default Swiper
