import Head from "next/head";
import {Divider, Pagination, Paper} from "@mui/material";
import React from "react";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/Footer";
import ComicsPaper from "../../components/ComicsPaper";

interface OnlineBooksState {
    comics: Comics
    count: number
    page: number
}

interface ComicsInfo {
    name: string
    path: string
    contents: string[]
    info: string
    cover: {
        file: string
        size: {
            width: number
            height: number
        }
    }
}

interface Comics {
    comics: ComicsInfo[]
}


class OnlineBooks extends React.Component<any, OnlineBooksState> {
    constructor(props) {
        super(props);
        this.state = {comics: null, page: 1, count: 1}
    }

    url = "/storage/file/MyWebsiteFile/OnlineBooks/漫画/"
    countOnePage = 7

    componentDidMount() {
        fetch(this.url + "comics_index.json").then(r => {
            r.json().then((r: Comics) => {
                this.setState({comics: r})
                this.setState({count: Math.ceil(r.comics.length / 7)})
            })
        })
    }

    handleChange = (event, value) => {
        this.setState({page: value})
    };

    handleChange2 = (event, value) => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.setState({page: value})
    };

    render() {
        const comicsPapers = []
        let {count, page, comics} = this.state

        if (comics) {
            const start = (page - 1) * this.countOnePage
            const end = this.countOnePage + start < comics.comics.length ? this.countOnePage + start : comics.comics.length
            for (const iComics of comics.comics.slice(start, end)) {
                let paper = (
                    <div key={iComics.name} style={{marginBottom: "1em"}}>
                        <ComicsPaper comics={iComics} url={this.url + iComics.path + "/"}/>
                    </div>
                )
                comicsPapers.push(paper)
            }
        }


        return (
            <>
                <Head>
                    <title>在线漫画</title>
                </Head>
                <HeaderNav hideHeight={0} title={"小荣的网站"}/>
                <main style={{marginTop: "5rem", paddingBottom: '40px', paddingLeft: '10px', paddingRight: '10px'}}>
                    <section style={{
                        maxWidth: '1200px',
                        margin: "2rem auto 1.5rem auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <Pagination count={count} page={page} onChange={this.handleChange} color="primary"/>
                        <div style={{height: "1rem"}}/>
                        {comicsPapers}
                        <div style={{height: "1rem"}}/>
                        <Pagination count={count} page={page} onChange={this.handleChange2} color="primary"/>
                    </section>
                </main>

                <Footer/>
            </>
        )
    }
}

export default OnlineBooks