import * as React from "react";
import styles from './HeaderVideo.module.css'
import TextTransition, {presets} from "react-text-transition";
import Typography from "@mui/material/Typography";

interface HeaderVideoStates {
    title: string;
}

class HeaderVideo extends React.Component<any, HeaderVideoStates> {
    intervalId: NodeJS.Timer
    start: number = 0;
    bgVideo: string

    constructor(props) {
        super(props);
        this.state = {title: this.sentences[0]}
        this.bgVideo = this.randomBg()
    }

    getSentences() {
        fetch("/assets/情话.txt").then((r) => {
            r.text().then((text) => {
                let strings: string[] = text.split("\n")
                this.sentences = this.sentences.concat(strings)

            })
        })
    }

    componentDidMount() {
        this.intervalId = setTimeout(this.changeTitle, 0)
        this.getSentences()
    }

    componentWillUnmount() {
        clearTimeout(this.intervalId)
    }

    changeTitle = () => {
        let index: number
        if (this.start < 2) {
            index = this.start
            this.start++
        } else {
            index = Math.floor(Math.random() * this.sentences.length)

        }
        this.setState({title: this.sentences[index]})
        this.intervalId = setTimeout(this.changeTitle, this.sentences[index].length * 500)
    }

    randomBg() {
        let videos = ["/storage/file/MyWebsiteFile/Videos/鲸落最终版 动态水印.webm",
            "/storage/file/MyWebsiteFile/Videos/冬駅.webm",
            "/storage/file/MyWebsiteFile/Videos/【明日方舟】迷迭香.webm",
            "/storage/file/MyWebsiteFile/Videos/魔法女孩2.webm",
            "/storage/file/MyWebsiteFile/Videos/neko 4k.webm",]
        let index = Math.floor(Math.random() * videos.length)
        return videos[index]
    }

    sentences: string[] = ["欢迎来到小荣的网站。", "希望你能喜欢这里。"]

    render() {
        return (
            <section style={{position: "relative", height: "70vh", maxHeight: '41.25rem', marginBottom: '40px'}}>
                <div className={styles.headerTitle}>
                    <Typography
                        component="h2"
                        variant="h3"
                        color="inherit"
                        align="left"
                        noWrap
                        className={styles.headerTitle2}
                    >
                        <TextTransition
                            text={this.state.title}
                            springConfig={presets.gentle}
                        />
                    </Typography>
                </div>
                <div className={styles.headerVideo}>
                    <video autoPlay loop playsInline muted={true}>
                        <source src={this.bgVideo}/>
                    </video>
                    {/*<iframe src={"/static/Miku/index.html"}/>*/}
                </div>
                <div className={styles.headerShadow}/>
            </section>
        )
    }
}

export default HeaderVideo;