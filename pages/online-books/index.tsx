import React from "react";
import {Pagination, Paper} from "@mui/material";
import Head from "next/head";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/HeaderNav";

interface BookPart {
    part: number
    pages: string[]
}

interface Book {
    name: string
    contents: BookPart[]
}

interface OnlineBooksState {
    book: Book
    page: number
}

class OnlineBooks extends React.Component<any, OnlineBooksState> {
    constructor(props) {
        super(props);
        this.state = {book: null, page: 1}
    }

    componentDidMount() {
        fetch("/storage/file/MyWebsiteFile/OnlineBooks/%E5%88%AB%E5%BD%93%E6%AC%A7%E5%B0%BC%E9%85%B1%E4%BA%86/index.json").then(r => {
            r.json().then(r => {
                this.setState({book: r})
            })
        })
    }

    handleChange = (event, value) => {
        this.setState({page: value})
    };

    render() {
        let {book: book, page: page} = this.state
        let name = ""
        let part = ""
        let images = null
        let count = 0
        if (book) {
            name = book.name
            part = book.contents[page - 1].part.toString()
            count = book.contents.length

            images = book.contents[page - 1].pages.map(item =>
                <img key={item}
                     style={{objectFit: "contain", width: "100%"}}
                     loading={"lazy"}
                     src={"/storage/file/MyWebsiteFile/OnlineBooks/%E5%88%AB%E5%BD%93%E6%AC%A7%E5%B0%BC%E9%85%B1%E4%BA%86/" + item}
                     alt={""}/>
            )
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
                        <Paper sx={{
                            borderRadius: "15px",
                            padding: "1rem .5rem",
                            width:"100%",
                            backgroundColor: "#f5f0e8",
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                               elevation={8}>
                            <h2 style={{color: 'cornflowerblue', textAlign: "center"}}>{name}</h2>
                            <h3 style={{color: 'cornflowerblue', textAlign: "center"}}>Part {part}</h3>
                            {images}
                        </Paper>
                        <div style={{height: "1rem"}}/>
                        <Pagination count={count} page={page} onChange={this.handleChange} color="primary"/>
                    </section>
                </main>

                <Footer/>
            </>
        );
    }
}

export default OnlineBooks;
