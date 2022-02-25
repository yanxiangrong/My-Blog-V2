import Button from "@mui/material/Button";
import * as React from "react";

export default function Contents() {
    return (
        <>
            <h2 style={{color: 'cornflowerblue', textAlign: "center"}}>网站导航</h2>
            <blockquote style={{
                padding: '.6rem 1rem',
                borderLeft: '4px solid cornflowerblue',
                backgroundColor: 'rgba(0,120,231,.05)'
            }}>
                <p style={{margin: '4px 0'}}>本站及附属子网站</p>
            </blockquote>

            <div style={{
                display: "flex", flexDirection: "row",
                padding: '8px',
                borderRadius: '10px',
                boxShadow: 'inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94,104,121,0.288)'
            }}>
                <img style={{
                    width: '30%',
                    borderRadius: '8px',
                    objectFit: 'cover',
                }} src={"/assets/image/a.35e90d8b.jpg"} alt={''}/>
                <div style={{marginLeft: ".5rem", width: "100%"}}>
                    <h3 style={{margin: ".5rem 0 0 0"}}>
                        ESP8266气象站
                    </h3>
                    <p style={{margin: ".5rem 0 0 0"}}>
                        使用基于ESP8266设计的低功耗、太阳能、环境监测节点。用WIFI接入校园网，24小时不间断监测校园温湿度。
                    </p>
                    <Button href={'https://ems.yandage.top'}>前往网站</Button>
                </div>
            </div>

            <div style={{
                display: "flex", flexDirection: "row",
                marginTop: "1em",
                padding: '8px',
                borderRadius: '10px',
                boxShadow: 'inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94,104,121,0.288)'
            }}>
                <div style={{marginRight: ".5rem", width: "100%"}}>
                    <h3 style={{margin: ".5rem 0 0 0"}}>
                        书架
                    </h3>
                    <p style={{margin: ".5rem 0 0 0"}}>
                        存放着一些PDF电子书，有技术类的像一些安卓开发，编程语言等等，也有一些漫画。欢迎大家翻阅。
                    </p>
                    <Button href={"/storage/folder/E%20Book/"}>前往网站</Button>
                </div>
                <img style={{
                    width: '30%',
                    borderRadius: '8px',
                    objectFit: 'cover',
                }} src={"/assets/image/86546978_p0.jpg"} alt={''}/>
            </div>

            <div style={{
                display: "flex", flexDirection: "row",
                padding: '8px',
                borderRadius: '10px',
                marginTop: "1em",
                boxShadow: 'inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94,104,121,0.288)'
            }}>
                <img style={{
                    width: '30%',
                    borderRadius: '8px',
                    objectFit: 'cover',
                }} src={"/assets/image/86546978_p0.jpg"} alt={''}/>
                <div style={{marginLeft: ".5rem", width: "100%"}}>
                    <p style={{margin: ".5rem 0 0 0"}}>
                        pixiv股份有限公司是一家总部位于东京都涉谷区的、属于安利美特集团的网络风险投资企业集团公司。目前正在运营提供插图交流服务的会员制网站“pixiv”及其相关服务。
                    </p>
                    <Button>前往网站</Button>
                </div>
            </div>
        </>
    )
}