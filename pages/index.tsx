import * as React from 'react';
import HeaderNav from "../components/HeaderNav";
import HeaderVideo from "../components/HeaderVideo";
import Footer from "../components/Footer";
import {Paper} from "@mui/material";
import Neko from "../components/Neko";
import styles from "../components/utils.module.css"
import Contents from "../components/Contents";
import {remark} from 'remark'
import html from 'remark-html'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeStringify from 'rehype-stringify'
import fs from "fs"
import matter from 'gray-matter'
import Head from 'next/head'

export async function getStaticProps() {
    const fileContents = fs.readFileSync('posts/introduce.md', 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        props: {
            contentHtml
        }
    }
}

interface HomeProps {
    contentHtml: string
}

class Home extends React.Component<HomeProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        let {contentHtml} = this.props
        return (
            <>
                <Head>
                    <title>小荣的网站</title>
                </Head>
                <HeaderNav hideHeight={200} title={"小荣的网站"}/>
                <HeaderVideo/>

                <main style={{paddingBottom: '40px', paddingLeft: '10px', paddingRight: '10px'}}>
                    <section
                        style={{
                            maxWidth: '1200px',
                            margin: "0 auto 1.5rem auto",
                            display: 'flex',
                            flexDirection: "row"
                        }}>
                        <Paper sx={{
                            width: '100%',
                            borderRadius: "15px",
                            padding: "8px",
                            backgroundColor: "#e7e0dd",
                            display: 'flex',
                            flexDirection: 'column',
                            // alignItems: 'center'
                        }}
                               elevation={8}>
                            <Contents/>
                        </Paper>
                        <div className={styles.hidden1}>
                            <Paper sx={{
                                width: '350px',
                                borderRadius: "15px",
                                padding: "8px",
                                backgroundColor: "#dde1e7",
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: '1.5rem',
                                alignItems: 'center'
                            }}
                                   elevation={8}>
                                <iframe style={{width: '300px', height: '300px'}} frameBorder={0}
                                        src={"/static/clock/index.html"}/>
                                <Neko/>
                            </Paper>
                        </div>
                    </section>
                    <section style={{maxWidth: '1200px', margin: "2rem auto 1.5rem auto"}}>
                        <Paper sx={{
                            borderRadius: "15px",
                            padding: "2.5rem 1rem",
                            backgroundColor: "#f5f0e8",
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                               elevation={8}>
                            <div className={"markdown-body"} dangerouslySetInnerHTML={{__html: contentHtml}}/>
                        </Paper>
                    </section>

                </main>

                <Footer/>
            </>
        )
    }
}

export default Home;