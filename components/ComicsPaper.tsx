import React from "react";
import {Divider, Paper} from "@mui/material";
import styles from "../styles/book.module.css";
import Image from "next/image";
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from '@mui/material/styles';


interface Comics {
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

interface ComicsPaperProps {
    comics: Comics
    url: string
}

// const Accordion = styled(MuiAccordion)(({ theme }) => ({
//     border: 'none',
//     boxShadows: 'none',
//     backgroundColor: 'none'
// }));
//
// const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
//     backgroundColor: 'none'
// }));
//
// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//     padding: theme.spacing(2),
//     border: 'none',
// }));

class ComicsPaper extends React.Component<ComicsPaperProps, any> {
    render() {
        const comics = this.props.comics
        const buttons = []
        if (comics.contents) {
            let contents: string[] = comics.contents
            for (let i = 1; i <= contents.length; i++) {
                let button = <Button key={i}
                                     href={"/online-books/view?url=" + this.props.url + "&page=" + i.toString()}>{this.props.comics.contents[i - 1]}</Button>
                buttons.push(button)
            }
        }

        const info = []
        for (const line of comics.info) {
            let p = <p key={line}>{line}</p>
            info.push(p)
        }

        const myLoader = (props) => {
            return this.props.url + props.src
        }

        return (
            <Paper sx={{
                borderRadius: "15px",
                padding: "1rem .5rem",
                // width: "100%",
                backgroundColor: "#f5f0e8",
            }}
                   elevation={8}>
                <h2 style={{color: 'cornflowerblue', textAlign: "center"}}>{comics.name}</h2>
                <div className={styles.info}>
                    <div className={styles.infoImage}>
                        <Image height={376} width={265}
                               src={comics.cover.file}
                               loader={myLoader}
                               alt={comics.name}/>
                    </div>
                    <div className={styles.infoText}>
                        {info}
                    </div>
                </div>
                <div style={{height: ".5rem"}}/>
                <Divider/>
                <div style={{height: ".5rem"}}/>
                <div style={{textAlign: "center"}}>
                    <Button
                        variant="contained"
                        href={"/online-books/view?url=" + this.props.url}>开始阅读</Button>
                    <div style={{height: ".5rem"}}/>
                </div>
                <Accordion sx={{
                    backgroundColor: 'rgba(0,0,0,0)',
                    boxShadow: 'none'
                }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        <span>选集</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        {buttons}
                    </AccordionDetails>
                </Accordion>
            </Paper>
        )
    }
}

export default ComicsPaper;