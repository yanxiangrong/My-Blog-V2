import Head from "next/head";
import {Divider, Paper} from "@mui/material";
import React from "react";
import HeaderNav from "../../components/HeaderNav";
import Footer from "../../components/Footer";
import {
    Player,
    ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    BigPlayButton,
    LoadingSpinner,
    ClosedCaptionButton,
    PlaybackRateMenuButton,
    VolumeMenuButton
} from 'video-react';

function Video() {

    const videoUrl1 = "http://dd.hnitoj.cn/FilesStation/file/%e8%af%b7%e9%97%ae%e6%82%a8%e4%bb%8a%e5%a4%a9%e8%a6%81%e6%9d%a5%e7%82%b9%e5%85%94%e5%ad%90%e5%90%97%ef%bc%9f%ef%bc%9f/%e5%8e%8b%e7%bc%a9/%e8%af%b7%e9%97%ae%e6%82%a8%e4%bb%8a%e5%a4%a9%e8%a6%81%e6%9d%a5%e7%82%b9%e5%85%94%e5%ad%90%e5%90%97%ef%bc%9f%ef%bc%9f%20%286%29.mkv.webm"
    const videoUrl2 = "http://dd.hnitoj.cn/FilesStation/file/%e8%af%b7%e9%97%ae%e6%82%a8%e4%bb%8a%e5%a4%a9%e8%a6%81%e6%9d%a5%e7%82%b9%e5%85%94%e5%ad%90%e5%90%97%ef%bc%9f%ef%bc%9f/%e5%8e%9f%e7%94%bb/%e8%af%b7%e9%97%ae%e6%82%a8%e4%bb%8a%e5%a4%a9%e8%a6%81%e6%9d%a5%e7%82%b9%e5%85%94%e5%ad%90%e5%90%97%ef%bc%9f%ef%bc%9f%20[6].mkv"
    const preview = "http://dd.hnitoj.cn/FilesStation/preview/%e8%af%b7%e9%97%ae%e6%82%a8%e4%bb%8a%e5%a4%a9%e8%a6%81%e6%9d%a5%e7%82%b9%e5%85%94%e5%ad%90%e5%90%97%ef%bc%9f%ef%bc%9f/%e5%8e%9f%e7%94%bb/%e8%af%b7%e9%97%ae%e6%82%a8%e4%bb%8a%e5%a4%a9%e8%a6%81%e6%9d%a5%e7%82%b9%e5%85%94%e5%ad%90%e5%90%97%ef%bc%9f%ef%bc%9f%20[6].mkv"
    const captions1 = "http://dd.hnitoj.cn/FilesStation/file/%e8%af%b7%e9%97%ae%e6%82%a8%e4%bb%8a%e5%a4%a9%e8%a6%81%e6%9d%a5%e7%82%b9%e5%85%94%e5%ad%90%e5%90%97%ef%bc%9f%ef%bc%9f/%e5%ad%97%e5%b9%95/%e8%af%b7%e9%97%ae%e6%82%a8%e4%bb%8a%e5%a4%a9%e8%a6%81%e6%9d%a5%e7%82%b9%e5%85%94%e5%ad%90%e5%90%97%ef%bc%9f%ef%bc%9f%20[06].chs.vtt"
    const captions2 = "http://dd.hnitoj.cn/FilesStation/file/%e8%af%b7%e9%97%ae%e6%82%a8%e4%bb%8a%e5%a4%a9%e8%a6%81%e6%9d%a5%e7%82%b9%e5%85%94%e5%ad%90%e5%90%97%ef%bc%9f%ef%bc%9f/%e5%ad%97%e5%b9%95/%e8%af%b7%e9%97%ae%e6%82%a8%e4%bb%8a%e5%a4%a9%e8%a6%81%e6%9d%a5%e7%82%b9%e5%85%94%e5%ad%90%e5%90%97%ef%bc%9f%ef%bc%9f%20[06].cht.vtt"
    return (
        <>
            <Head>
                <title>在线视频</title>
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
                        <h2 style={{color: 'cornflowerblue', textAlign: "center"}}>请问你今天要来点兔子吗？</h2>
                        <div style={{width: "800px"}}>
                            <Player
                                poster={preview}
                                crossOrigin="anonymous"
                            >
                                <source
                                    src={videoUrl1}
                                    type="video/mp4"
                                />
                                <track
                                    kind="captions"
                                    src={captions1}
                                    srcLang="zh_zn"
                                    label="简体中文"
                                    default
                                />
                                <track
                                    kind="captions"
                                    src={captions2}
                                    srcLang="zh_tw"
                                    label="繁体中文"
                                />
                                <BigPlayButton position="center"/>
                                <ControlBar autoHide={true}>
                                    <ClosedCaptionButton order={7}/>
                                </ControlBar>
                                <LoadingSpinner/>
                            </Player>
                        </div>
                    </Paper>
                    <div style={{height: "1rem"}}/>
                </section>
            </main>

            <Footer/>
        </>
    )
}


export default Video