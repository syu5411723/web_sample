import styled from 'styled-components'

import { Bg, Number, Img } from '../../../atom/main/wedo/sec03/index'
import Thumbnail from '../../../molecule/main/wedo/sec02/Thumbnail'

const Container = styled.div`
    position:relative;
`


const Sec03 = () => {
    return (
        <>
            <Container>
                <Thumbnail />
                <Bg />
                <Img img="/images/brand_1.png" size={18} top={40} left={30} zIndex={1} />
                <Img img="/images/brand_2.png" size={20} top={60} left={40} zIndex={2} />
                <Img img="/images/brand_3.png" size={30} top={30} left={52} zIndex={1} />
                <Number />
            </Container>
        </>
    )
}

export default Sec03
