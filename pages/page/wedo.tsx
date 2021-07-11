
import PageBlack from '../../components/atom/design/PageBlack'
import Header from '../../components/template/Header'
import MainLeft from '../../components/molecule/main/MainLeft'
import ChangeLink from '../../components/atom/design/ChangeLink'
import WeDoMain from '../../components/template/main/WeDoMain'
import Layout from '../../components/Layout'

const wedo = () => {
    return (
        <>
            <Layout>
                <Header white={false} />
                <PageBlack page="wedo" />
                <ChangeLink />
                <MainLeft color="#fff" />
                <WeDoMain />
            </Layout>
        </>
    )
}

export default wedo
