// import styled from "styled-components"
// import Image from "next/dist/client/image"
// import { VFC } from "react"
// import { motion, useTransform, useViewportScroll } from "framer-motion"


// type Props = {
//     img: string
//     top: number
//     left: number
//     zIndex: number
//     height: number
//     width: number
//     y: any
// }

// const ImgContainer = styled(motion.div)``

// const Img: VFC<Props> = ({ img, top, left, zIndex, height, width, y }) => {
//     const ImgWrapper = styled(motion.div)`
//         /* position:absolute;
//         top: ${top}%;
//         left: ${left}%;
//         z-index: ${zIndex}; */
//     `
//     const ImgInner = styled(motion.div)`
//         width: ${width}vw;
//         height: ${height}vw;
//         position:relative;
//     `

//     return (
//         <>
//             <ImgContainer
//             >
//                 <ImgWrapper
//                 style={{y: `${y}`}}

//                 >
//                     <ImgInner>
//                         <Image src={img} layout="fill" objectFit="cover" />
//                     </ImgInner>
//                 </ImgWrapper>
//             </ImgContainer>
//             <>
//             </>
//         </>
//     )
// }

// export default Img

import Image from "next/image"
import { useTransform, useViewportScroll } from "framer-motion"
import { VFC } from "react"

import styled from "styled-components"
import { motion } from "framer-motion"


type Props = {
    img: string
    w: number
    h: number
}

const Img = ({ img, h , w,  }) => {
    const ImgWrapper = styled(motion.div)`
        width: ${w}vw;
        height: ${h}vw;
        position:relative;
    `

        return (
            <>
                    <ImgWrapper
                    >
                        <Image src={img} objectFit="cover" layout="fill" />
                    </ImgWrapper>
            </>
        )

}
export default Img
