import Sec03Img from "./secImg/wedo/Sec03Img"
import Sec05Img from "./secImg/wedo/Sec05Img"
import Sec04Img from "./secImg/weare/Sec04img"


const ImgSec = ({ page, img, primary }) => {
    return (
        <>
                <Sec03Img page={page} primary={primary} img={img} />
                <Sec05Img page={page} primary={primary} img={img} />
                <Sec04Img page={page} primary={primary} img={img} />
        </>
    )

}
export default ImgSec
