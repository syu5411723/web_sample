import styled from 'styled-components'

import ImgSec from '../../../atom/main/design/ImgSec'

const Cotainer = styled.div`
    margin-top: 100px;
`

const Sec06 = () => {
    return (
        <>
            <Cotainer>
                <ImgSec img="/images/what_05.jpg" primary={false} page={false} />
            </Cotainer>
        </>
    )
}

export default Sec06
