import styled from "styled-components"
import Sec01 from "../../organism/main/weare/Sec01"
import Sec02 from "../../organism/main/weare/Sec02"
import Sec03 from "../../organism/main/weare/Sec03"
import Sec04 from "../../organism/main/weare/Sec04"

const Container = styled.div`
    margin-top: 200px;
    position:relative;
    z-index:1;

`

const WeAreMain = () => {
    return (
        <>
            <Container>
                <Sec01 />
                <Sec02 />
                <Sec03 />
                <Sec04 />
            </Container>
        </>
    )
}

export default WeAreMain
