import Header from "../components/template/Header"
import ChangeLink from "../components/atom/design/ChangeLink"
import MainRight from "../components/molecule/main/MainRight"
import MainLeft from "../components/molecule/main/MainLeft"

const index = () => {
  return (
    <>
    <Header color="#000"/>
    <ChangeLink />
    <MainLeft color="#333"/>
    <MainRight />
    </>
  )
}

export default index
