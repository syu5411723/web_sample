import Header from "../components/template/Header"
import ChangeLink from "../components/atom/design/ChangeLink"
import MainRight from "../components/molecule/main/MainRight"
import MainLeft from "../components/molecule/main/MainLeft"
import { HomeMain } from "../components/template/main/HomeMain"
import PageBlack from "../components/atom/design/PageBlack"

const index = () => {
  return (
    <>
      <Header color="#000" />
      <ChangeLink />
      <MainLeft color="#333" />
      <MainRight />
      <HomeMain />
    </>
  )
}

export default index
