import styled from 'styled-components'

import PageBlack from '../../components/atom/design/PageBlack'
import Header from '../../components/template/Header'
import MainRight from '../../components/molecule/main/MainRight'
import ChangeLink from '../../components/atom/design/ChangeLink'
import WeAreMain from '../../components/template/main/WeAreMain'


const Container = styled.div``

const weare = () => {
    return (
        <>
            <PageBlack page="weare" />
            <ChangeLink />
            <MainRight />
            <Header color="#000" />
            <WeAreMain />
        </>
    )
}

export default weare
