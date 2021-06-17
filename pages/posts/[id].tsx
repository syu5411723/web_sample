import { useRouter } from "next/router"
import Link from "next/link"


const Content = () => {
    const router = useRouter();
    return (
        <>
            <Link href="/" >Back To Home</Link>
            <h1></h1>
            <p>挨拶</p>
        </>
    )
}

export default Content
