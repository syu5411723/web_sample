import styled from "styled-components"

const Wrapper = styled.div`
    position:absolute;
    top:40%;
    right:-5%;
`
const Line01 = styled.div`
    width: 45px;
    height: 3px;
    background-color: #fff;
    transform:rotate(30deg) ;

`
const Line02 = styled.div`
    width: 45px;
    height: 3px;
    background-color: #fff;
    transform:rotate(-30deg) translate(-8px, 18px) ;
`


const Arrow = () => {
    return (
        <>
            <Wrapper>
                <Line01 />
                <Line02 />
            </Wrapper>
        </>
    )
}

export default Arrow
