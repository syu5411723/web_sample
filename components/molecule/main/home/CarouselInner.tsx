import styled from "styled-components"
import CarouselImage from "../../../atom/main/home/Carouselmage"

const CarouselWrapper = styled.div`
    width: 80vw;
    height: 85vh;
    position:absolute;
    z-index:20;
    top:55%;
    left:50%;
    transform:translate(-50%, -50%);
`

const images = [
    './images/index_1.jpg',
    './images/index_2.jpg',
    './images/index_3.jpg',
]

const CarouselInner = () => {
    return (
        <>
            <CarouselWrapper>
                <CarouselImage images={images} displacmentImage="./images/displacementImages/2.jpg" speed={2} />
            </CarouselWrapper>
        </>
    )
}

export default CarouselInner
