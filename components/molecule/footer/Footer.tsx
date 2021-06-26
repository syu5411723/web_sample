import styled from "styled-components"

import FooterTitle from "../../atom/footer/FooterTitle"
import FooterLogo from "../../atom/footer/FooterLogo"
import FooterContact from "../../atom/footer/FooterContact"
import { VFC } from "react"

const Container = styled.div`
    width: 100%;
    height: 250px;
`
const FooterInner = styled.div`
    height:100%;
    width: 60vw;
    margin: 0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;

`
type Props = {
    primary: boolean
}


const Footer:VFC<Props> = ({primary}) => {
    return (
        <>
            <Container>
                <FooterInner>
                    <FooterTitle  primary={primary} />
                    <FooterContact primary={primary} />
                    {/* <FooterLogo img="/images/social-fb.png" />
                    <FooterLogo img="/images/social-tw.png" /> */}
                </FooterInner>
            </Container>
        </>
    )
}

export default Footer
