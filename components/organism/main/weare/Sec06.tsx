import styled from "styled-components"
import Head from "../../../atom/main/weare/sec06/Head"
import Info from "../../../atom/main/weare/sec06/Info"

const Container = styled.div`

`

const Sec06 = () => {
    return (
        <>
            <Container>
                <Head />
                <Info title="TEL" content="080" />
                <Info title="MAIL" content="syurrer" />
            </Container>
        </>
    )
}

export default Sec06
