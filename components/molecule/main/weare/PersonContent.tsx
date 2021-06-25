
import styled from "styled-components"

import { ProfileContet } from "../../../atom/main/weare/sec04"

const ProfileWrapper = styled.div`
width:80vw;
max-width:800px;
margin: 0 auto;
`
const PersonContent = ({content}) => {
    return (
        <>
            <ProfileWrapper>
                <ProfileContet content={content} />
            </ProfileWrapper>
    </>
    )
}

export default PersonContent
