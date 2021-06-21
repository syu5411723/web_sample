import styled from "styled-components"

import Name from "../../../atom/main/weare/sec04/Name"
import Card from "../../../atom/main/weare/sec04/Card"
import Info from "../../../atom/main/weare/sec04/Info"

const Person = ({ img, name, info }) => {
    return (
        <>
                    <Name name={name} />
                    <Card img={img} />
                    <Info info={info} />
        </>
    )
}

export default Person
