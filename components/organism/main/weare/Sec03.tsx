import styled from "styled-components"
import ImgSec from "../../../atom/main/design/ImgSec"
import Sec05Img from "../../../atom/main/design/secImg/weare/Sec05Img"

const Container = styled.div`
    margin-top: 50px;
    margin-bottom: 100px;
`
const ImgWrapper = styled.div`
    width:100%;
    height: 110vw;
`

const Sec03 = () => {
    return (
        <>
            <Container>
                <ImgSec primary={true} page={true} img="/images/who_03.jpg" />
                <ImgWrapper />
                <Sec05Img img="/images/who_04.jpg" />
            </Container>
        </>
    )
}

export default Sec03
