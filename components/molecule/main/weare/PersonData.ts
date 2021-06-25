import { useViewportScroll, useTransform } from "framer-motion"

const Scroll = () => {
    const { scrollYProgress } = useViewportScroll();
    const name01 = useTransform(scrollYProgress, [0.34, 0.5], [0, -100])
    const info01 = useTransform(scrollYProgress, [0.35, 0.52], [0, -60])
}




export const personData = [
    {
        name: "MEKAWA-SYUKI",
        img: "/images/amagawa.jpg",
        info: "ENGNNIER",
        content: "1986年生まれ。大阪府出身。2010年よりフリーのクリエイティブ・ディレクターとして独立。大手企業からスタートアップまで、数々のWebサービスやアプリ、アパレルブランドなどの事業立ち上げに携わる。異分野のクリエイターが集まり、自由にモノツクリできる場を創るため、2013年にSuper Crowdsを創業。",
    },
    {
        name: "MEKAWA-SYUKI",
        img: "/images/amagawa.jpg",
        info: "ENGNNIER",
        content: "1986年生まれ。大阪府出身。2010年よりフリーのクリエイティブ・ディレクターとして独立。大手企業からスタートアップまで、数々のWebサービスやアプリ、アパレルブランドなどの事業立ち上げに携わる。異分野のクリエイターが集まり、自由にモノツクリできる場を創るため、2013年にSuper Crowdsを創業。",
    },
    {
        name: "MEKAWA-SYUKI",
        img: "/images/amagawa.jpg",
        info: "ENGNNIER",
        content: "1986年生まれ。大阪府出身。2010年よりフリーのクリエイティブ・ディレクターとして独立。大手企業からスタートアップまで、数々のWebサービスやアプリ、アパレルブランドなどの事業立ち上げに携わる。異分野のクリエイターが集まり、自由にモノツクリできる場を創るため、2013年にSuper Crowdsを創業。",
    },
    {
        name: "MEKAWA-SYUKI",
        img: "/images/amagawa.jpg",
        info: "ENGNNIER",
        content: "1986年生まれ。大阪府出身。2010年よりフリーのクリエイティブ・ディレクターとして独立。大手企業からスタートアップまで、数々のWebサービスやアプリ、アパレルブランドなどの事業立ち上げに携わる。異分野のクリエイターが集まり、自由にモノツクリできる場を創るため、2013年にSuper Crowdsを創業。",
    },
    {
        name: "MEKAWA-SYUKI",
        img: "/images/amagawa.jpg",
        info: "ENGNNIER",
        content: "1986年生まれ。大阪府出身。2010年よりフリーのクリエイティブ・ディレクターとして独立。大手企業からスタートアップまで、数々のWebサービスやアプリ、アパレルブランドなどの事業立ち上げに携わる。異分野のクリエイターが集まり、自由にモノツクリできる場を創るため、2013年にSuper Crowdsを創業。",
    }
]