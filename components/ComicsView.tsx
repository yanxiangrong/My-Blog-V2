import React from "react";
import {Pagination, Paper} from "@mui/material";
import Image from 'next/image'
import styles from '../styles/book.module.css'

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


interface ComicsViewState {
    book: Book
    page: number
    containerWidth: number
}

interface ComicsViewProp {
    url: string
    page: number
}


class ComicsView extends React.Component<ComicsViewProp, ComicsViewState> {
    constructor(props) {
        super(props);
        this.state = {book: null, page: this.props.page, containerWidth: 200}
    }

    containerDom = null

    componentDidMount() {
        this.containerDom = document.getElementById("container")
        // console.log("width:", this.containerDom.offsetWidth)
        fetch(this.props.url + "index.json").then(r => {
            r.json().then((r: Book) => {
                this.setState({book: r})
            })
        })

        // window.addEventListener('resize', this.handleResize);
        // this.handleResize()
    }

    componentWillUnmount() {
        // window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        // console.log("width:", this.containerDom.offsetWidth)
        if (Math.floor(this.containerDom.offsetWidth / 100) == Math.floor(this.state.containerWidth / 100)) {
            return
        }
        console.log("resize")
        this.setState({containerWidth: this.containerDom.offsetWidth})
    }

    handleChange = (event, value) => {
        this.setState({page: value})
    };

    handleChange2 = (event, value) => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.setState({page: value})
    };

    render() {
        let {book: book, page: page, containerWidth: containerWidth} = this.state
        let name = "Loading..."
        let part = ""
        let images = null
        let count = 0
        if (book) {
            name = book.name
            part = book.contents[page - 1].part_name
            count = book.contents.length

            const myLoader = (props) => {
                return this.props.url + props.src
            }

            let i = 0
            images = book.contents[page - 1].images.map(item => {
                    let {width: width, height: height} = item.size
                    i++;
                    return (
                        <div  key={item.file} style={{position: "relative", zIndex: "50", marginBottom: ".5rem"}}>
                            <Image
                                loading={"lazy"}
                                // width={containerWidth}
                                width={1200}
                                height={height * 1200 / width}
                                // height={height * containerWidth / width}
                                loader={myLoader}
                                src={part + "/" + item.file}
                                // src={"/assets/image/84179374_p0.png"}
                                alt={item.file}
                            />
                            <div className={styles.placeholder}>
                                <h1>{i}</h1>
                            </div>
                        </div>
                    )
                }
            )
        }

        return (
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
                    width: "100%",
                    backgroundColor: "#f5f0e8",
                    display: 'flex',
                    flexDirection: 'column',
                }}
                       elevation={8}>
                    <h2 style={{color: 'cornflowerblue', textAlign: "center"}}>{name}</h2>
                    <h3 style={{color: 'cornflowerblue', textAlign: "center"}}>{part}</h3>
                    <div id={"container"} style={{
                        width: "100%",
                        objectFit: "contain",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        {images}
                    </div>
                </Paper>
                <div style={{height: "1rem"}}/>
                <Pagination count={count} page={page} onChange={this.handleChange2} color="primary"/>
            </section>
        );
    }
}

export default ComicsView;
