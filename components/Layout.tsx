
import Head from "next/head"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Super Crowds</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout
