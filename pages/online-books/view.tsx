import Head from "next/head";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/Footer";
import React from "react";
import ComicsView from "../../components/ComicsView";
import {useRouter} from 'next/router'


export default function View() {
    const router = useRouter()
    const {url, page} = router.query
    let page2 = 1
    if (page) {
        page2 = parseInt(page.toString(), 10)
    }
    return (
        <>
            <Head>
                <title>在线漫画</title>
            </Head>
            <HeaderNav hideHeight={0} title={"小荣的网站"}/>
            <main style={{marginTop: "5rem", paddingBottom: '40px', paddingLeft: '10px', paddingRight: '10px'}}>
                {url && <ComicsView url={url.toString()} page={page2}/>}
            </main>

            <Footer/>
        </>
    )
}