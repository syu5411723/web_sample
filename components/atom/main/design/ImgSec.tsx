import { Sec03Img, Sec04Img, Sec05Img, Sec07Img } from "./secImg/index"


const ImgSec = ({ page, img, primary }) => {
    return (
        <>
            <Sec03Img page={page} primary={primary} img={img} />
            <Sec05Img page={page} primary={primary} img={img} />
            <Sec04Img page={page} primary={primary} img={img} />
            <Sec07Img page={page} primary={primary} img={img} />
        </>
    )

}
export default ImgSec
