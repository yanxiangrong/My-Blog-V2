import Head from "next/head";
import HeaderNav from "../../components/HeaderNav";
import * as React from "react";
import {Paper} from "@mui/material";
import styles from "../../components/HeaderVideo.module.css";
import stylesUtils from "../../components/utils.module.css";
import Typography from "@mui/material/Typography";
import Footer from "../../components/Footer";
import Button from "@mui/material/Button";

export default function Files() {
    return (
        <>
            <Head>
                <title>文件站</title>
            </Head>
            <HeaderNav hideHeight={150} title={"小荣的网站"}/>
            <section style={{position: "relative", height: "50vh", maxHeight: '27.5rem', marginBottom: '40px'}}>
                <div className={styles.headerTitle}>
                    <Typography
                        component="h2"
                        variant="h3"
                        color="inherit"
                        align="center"
                        noWrap
                        className={styles.headerTitle2}
                    >
                        文件站
                    </Typography>
                </div>
                <div className={styles.headerVideo}>
                    <img alt={""}
                         src={"/assets/image/row-of-red-work-files-with-one-yellow-one-110953663-57ab2a733df78cf45974949c.webp"}/>
                </div>
                <div className={styles.headerShadow}/>
            </section>

            <main style={{paddingBottom: '40px', paddingLeft: '10px', paddingRight: '10px'}}>
                <section style={{maxWidth: '1200px', margin: "2rem auto 1.5rem auto"}}>
                    <Paper className={stylesUtils.hidden1} sx={{
                        borderRadius: "15px",
                        padding: "2.5rem 1rem",
                        backgroundColor: "#f5f0e8",
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                           elevation={8}>
                        <h2 style={{color: 'cornflowerblue', textAlign: "center"}}>
                            阿里云文件站
                        </h2>
                        <div>
                            <p>位于阿里云服务器上，用来存放一些小型文件。</p>
                            <Button href={'/storage/details/'}>前往网站</Button>
                        </div>
                    </Paper>
                </section>
            </main>

            <Footer/>
        </>
    )
}