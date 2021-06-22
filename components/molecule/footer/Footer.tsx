import styled from "styled-components"

import FooterTitle from "../../atom/footer/FooterTitle"
import FooterLogo from "../../atom/footer/FooterLogo"
import FooterContact from "../../atom/footer/FooterContact"

const Container = styled.div``


const Footer = () => {
    return (
        <>
            <Container>
                <FooterTitle />
                <FooterContact />
                <FooterLogo logo=""/>
            </Container>
        </>
    )
}

export default Footer
