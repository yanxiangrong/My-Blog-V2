import Head from "next/head";
import {Divider, Paper} from "@mui/material";
import React from "react";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/Footer";
import Button from "@mui/material/Button";
import Image from 'next/image'
import styles from '../../styles/book.module.css'

interface OnlineBooksState {
    book: Book
}

interface BookPart {
    part_name: string,
    images: {
        file: string
        size: {
            width: number
            height: number
        }
    }[]
}

interface Book {
    name: string
    contents: BookPart[]
}

class OnlineBooks extends React.Component<any, OnlineBooksState> {
    constructor(props) {
        super(props);
        this.state = {book: null}
    }

    url = "/storage/file/MyWebsiteFile/OnlineBooks/%E5%88%AB%E5%BD%93%E6%AC%A7%E5%B0%BC%E9%85%B1%E4%BA%86/"

    componentDidMount() {
        fetch(this.url + "index.json").then(r => {
            r.json().then((r: Book) => {
                this.setState({book: r})
            })
        })
        // this.setState({pages: 14})
    }


    render() {
        const buttons = []
        if (this.state.book) {
            let contents: BookPart[] = this.state.book.contents
            for (let i = 1; i <= contents.length; i++) {
                let button = <Button
                    href={"/online-books/view?url=" + this.url + "&page=" + i.toString()}>{contents[i - 1].part_name}</Button>
                buttons.push(button)
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
                        <div style={{height: "1rem"}}/>
                        <Paper sx={{
                            borderRadius: "15px",
                            padding: "1rem .5rem",
                            // width: "100%",
                            backgroundColor: "#f5f0e8",
                        }}
                               elevation={8}>
                            <h2 style={{color: 'cornflowerblue', textAlign: "center"}}>《别当欧尼酱了！》</h2>
                            <div className={styles.info}>
                                <div>
                                    <Image height={376} width={265} src={"/assets/image/別當歐尼醬了_商業版_封面.png"}
                                           alt={'别当欧尼酱了'}/>
                                </div>
                                <p>漫画简介：《别当欧尼酱了！》是由猫豆腐老师于2017年执笔并发行在日本地区的漫画作品。一觉醒来，家里蹲变成了萌萝莉？！这究竟是道德的沦丧，还是人性的泯灭？《深夜雀食堂》《六驱好朋友》作者·ねことうふ老师的P站新作！（作者P站id=159912）
                                    。。<br/>前面14话来自正版电子书，后面的来自某粉色软件，画质要差一些。</p>
                            </div>
                            <div style={{height: ".5rem"}}/>
                            <Divider/>
                            <div style={{height: ".5rem"}}/>
                            <div style={{textAlign: "center"}}>
                                <Button
                                    variant="contained"
                                    href={"/online-books/view?url=" + this.url}>开始阅读</Button>
                                <div style={{height: ".5rem"}}/>
                            </div>
                            {buttons}
                        </Paper>
                        <div style={{height: "1rem"}}/>
                    </section>
                </main>

                <Footer/>
            </>
        )
    }
}

export default OnlineBooks