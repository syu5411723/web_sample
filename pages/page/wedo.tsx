import PageBlack from '../../components/atom/design/PageBlack'
import ChangeLink from '../../components/atom/design/ChangeLink'
import WeDoMain from '../../components/template/main/WeDoMain'
import Layout from '../../components/Layout'
import Left from '../../components/organism/main/home/Left'
import Header from '../../components/template/Header'

const wedo = () => {
    return (
        <>
            <Layout>
                <Header />
                <PageBlack page="wedo" />
                <ChangeLink />
                <Left  home={false} />
                <WeDoMain />
            </Layout>
        </>
    )
}

export default wedo
