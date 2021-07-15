import PageBlack from '../../components/atom/design/PageBlack'
import MainLeft from '../../components/molecule/main/MainLeft'
import ChangeLink from '../../components/atom/design/ChangeLink'
import WeDoMain from '../../components/template/main/WeDoMain'
import Layout from '../../components/Layout'

const wedo = () => {
    return (
        <>
            <Layout>
                <PageBlack page="wedo" />
                <ChangeLink />
                <MainLeft />
                <WeDoMain />
            </Layout>
        </>
    )
}

export default wedo
