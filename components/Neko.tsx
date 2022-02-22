import React from "react";
import chineseLunar from "chinese-lunar"


interface NekoState {
    say: string
}

class Neko extends React.Component<any, NekoState> {
    constructor(props) {
        super(props);
        this.state = {say: ""}
        this.audioUrls = this.getAudioUrls()
    }

    id: NodeJS.Timer
    count: number = 1
    audio: any[] = []
    audioUrls: string[] = []

    getAudioUrls() {
        let urls: string[] = []
        for (let i = 1; i <= 19; i++) {
            let url = "/assets/sounds/neko/" + i.toString() + ".mp3"
            urls.push(url)
        }
        return urls
    }

    componentDidMount() {
        this.id = setTimeout(this.changeSay, 3000);
    }

    changeSay = () => {
        const time = new Date()
        let sayStr: string
        switch (this.count) {
            case 1:
                if (time.getHours() >= 6 && time.getHours() < 9) {
                    sayStr = "早安，今天也要开心哦"
                } else if (time.getHours() >= 22 && time.getHours() < 24) {
                    sayStr = "晚上好呀，要早点睡觉哦"
                } else if (time.getHours() >= 24 && time.getHours() < 3) {
                    sayStr = "都这么晚了，你怎么还没睡觉呢"
                } else if (time.getHours() >= 3 && time.getHours() < 5) {
                    sayStr = "都快天亮了吧，下次可别这样了"
                } else if (time.getHours() >= 18 && time.getHours() < 22) {
                    sayStr = "今天过得开心吗"
                } else if (time.getHours() >= 11 && time.getHours() < 12) {
                    sayStr = "快吃午饭了欸，你饿了吗"
                } else {
                    sayStr = "你好呀"
                }
                this.id = setTimeout(this.changeSay, 7000);
                break
            case 2:
                let timeMinutes: string
                let timePrefix: string
                let timeHours: string
                let hours = time.getHours()
                let minutes = time.getMinutes()
                console.log(hours)
                if (hours >= 3 && hours < 6) {
                    timePrefix = "凌晨"
                } else if (hours >= 6 && hours < 8) {
                    timePrefix = "早晨"
                } else if (hours >= 8 && hours < 11) {
                    timePrefix = "上午"
                } else if (hours >= 11 && hours < 13) {
                    timePrefix = "中午"
                } else if (hours >= 13 && hours < 17) {
                    timePrefix = "下午"
                } else if (hours >= 17 && hours < 19) {
                    timePrefix = "傍晚"
                } else if (hours >= 19 && hours < 23) {
                    timePrefix = "晚上"
                } else if (hours >= 23 || hours < 3) {
                    timePrefix = "深夜"
                } else {
                    timePrefix = ""
                }

                hours %= 12
                if (hours == 0) {
                    hours = 12
                }
                timeHours = hours.toString()

                if (minutes == 0) {
                    timeMinutes = "整"
                } else if (minutes == 30) {
                    timeMinutes = "半"
                } else {
                    timeMinutes = minutes.toString() + "分"
                }

                sayStr = "现在是" + timePrefix + timeHours + "点" + timeMinutes
                this.id = setTimeout(this.changeSay, 5000);
                break
            case 3:
                const days = ["天", "一", "二", "三", "四", "五", "六"]
                time.getDate()
                sayStr = "今天是" + (time.getMonth() + 1).toString() + "月" + time.getDate().toString() + "号" + "星期" + days[time.getDay()]
                this.id = setTimeout(this.changeSay, 5000);
                break
            case 4:
                const lunar = chineseLunar.solarToLunar(time);
                sayStr = "农历" + chineseLunar.format(lunar, 'MD')
                this.id = setTimeout(this.changeSay, 5000);
                break
            default:
                this.count = 0
                this.id = setTimeout(this.changeSay, 7000);
                break
        }
        this.count++

        this.setState({say: sayStr})
    }

    componentWillUnmount() {
        clearInterval(this.id)
    }

    getAudio = elem => {
        this.audio.push(elem)
    }

    handleMouseOver = () => {
        let index = Math.floor(Math.random() * this.audio.length)
        this.audio[index].play()
    }

    render() {
        const audios = this.audioUrls.map((src) =>
            <audio key={src} ref={this.getAudio} hidden={true} preload={"auto"} autoPlay={false} src={src}/>
        );

        return (
            <div style={{position: 'relative'}}>
                <div style={{zIndex: 50, position: 'absolute', width: '100%'}}>
                    <p style={{textAlign: 'center'}}>{this.state.say}</p>
                </div>
                <video onClick={this.handleMouseOver} title={'Nyan!'} style={{height: '30rem', zIndex: 10}} autoPlay
                       loop playsInline muted>
                    <source type={"video/webm"} src={"/assets/video/猫猫.webm"}/>
                </video>
                {audios}
            </div>
        );
    }
}

export default Neko;