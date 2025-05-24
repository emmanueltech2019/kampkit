import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Kitkamp - Fashion & Design brand"}
                </title>
            </Head>
        </>
    )
}

export default PageHead