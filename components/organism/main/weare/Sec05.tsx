import styled from "styled-components"
import ImgSec from "../../../atom/main/design/ImgSec"

const Container = styled.div`
    margin-bottom:100px;
`

const Sec05 = () => {
    return (
        <>
            <Container>
                <ImgSec primary={false} page={true} img="/images/who_05.jpg" />
            </Container>
        </>
    )
}

export default Sec05
