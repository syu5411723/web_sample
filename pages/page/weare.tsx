import styled from 'styled-components'

import PageBlack from '../../components/atom/design/PageBlack'
import ChangeLink from '../../components/atom/design/ChangeLink'
import WeAreMain from '../../components/template/main/WeAreMain'
import Layout from '../../components/Layout'
import Right from '../../components/organism/main/home/Right'
import Header from '../../components/template/Header'


const Container = styled.div``

const weare = () => {
    return (
        <>
            <Layout>
                <Header />
                <PageBlack page="weare" />
                <ChangeLink />
                <Right home={false} />
                <WeAreMain />
            </Layout>
        </>
    )
}

export default weare
