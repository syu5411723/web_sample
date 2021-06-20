
import PageBlack from '../../components/atom/design/PageBlack'
import Header from '../../components/template/Header'
import MainLeft from '../../components/molecule/main/MainLeft'
import ChangeLink from '../../components/atom/design/ChangeLink'

const wedo = () => {
    return (
        <>
            <Header color="#fff" />
            <PageBlack bg="#000" />
            <ChangeLink />
            <MainLeft color="#fff" />
        </>
    )
}

export default wedo
