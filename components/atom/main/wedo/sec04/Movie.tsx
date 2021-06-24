import Image from "next/dist/client/image"
import styled from "styled-components"

const Wrapper = styled.div`
    position:absolute;
    right: 5%;
    top: -40%;
`

const Inner = styled.div`
    height: 60vw;
    width: 30vw;
    /* position:relative; */
`


const Movie = () => {
    return (
        <>
            <Wrapper>
                <Inner>
                    <Image src="/images/what_we_do.gif" layout="fill" objectFit="cover" />
                </Inner>
            </Wrapper>
        </>
    )
}

export default Movie
