import styled from 'styled-components'

import PageBlack from '../../components/atom/design/PageBlack'
import ChangeLink from '../../components/atom/design/ChangeLink'
import WeAreMain from '../../components/template/main/WeAreMain'
import Layout from '../../components/Layout'
import Right from '../../components/organism/main/home/Right'


const Container = styled.div``

const weare = () => {
    return (
        <>
            <Layout>
                <PageBlack page="weare" />
                <ChangeLink />
                <Right home={false} />
                <WeAreMain />
            </Layout>
        </>
    )
}

export default weare
