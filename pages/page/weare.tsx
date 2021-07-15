import styled from 'styled-components'

import PageBlack from '../../components/atom/design/PageBlack'
import MainRight from '../../components/molecule/main/MainRight'
import ChangeLink from '../../components/atom/design/ChangeLink'
import WeAreMain from '../../components/template/main/WeAreMain'
import Layout from '../../components/Layout'


const Container = styled.div``

const weare = () => {
    return (
        <>
            <Layout>
                <PageBlack page="weare" />
                <ChangeLink />
                <MainRight />
                <WeAreMain />
                
            </Layout>
        </>
    )
}

export default weare
