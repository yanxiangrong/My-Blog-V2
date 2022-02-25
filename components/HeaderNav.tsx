import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './HeaderNav.module.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from "@mui/material/Avatar";


const sections = [
    {title: '文件站', url: '/files'},
    {title: '图库', url: '/pictures'},
    {title: '关于', url: '#'},
];


interface HeaderProps {
    title: string;
    hideHeight: number
}

interface HeaderStates {
    transparent: boolean;
}


class HeaderNav extends React.Component<HeaderProps, HeaderStates> {
    title: string

    constructor(props) {
        super(props);
        this.title = props.title;
        this.state = {transparent: true}
    }

    handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop
        if (scrollTop > this.props.hideHeight) {
            this.setState({transparent: false})
        } else {
            this.setState({transparent: true})
        }
    }

    componentDidMount() {
        if (this.props.hideHeight != 0) {
            document.addEventListener('scroll', this.handleScroll)
        } else {
            this.setState({transparent: false})
        }
    }

    componentWillUnmount() {
        if (this.props.hideHeight != 0) {
            document.removeEventListener('scroll', this.handleScroll)
        }
    }

    render() {
        return (
            <header className={this.state.transparent ? styles.headerNavTransparent : styles.headerNav}>
                <Toolbar component="section"
                         sx={{maxWidth: '1400px', margin: '0 auto'}}>
                    <Avatar sx={{width: 32, height: 32, marginRight: ".5rem"}} src={"/assets/avatar/xiaorong.jpg"}/>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="left"
                        noWrap
                        sx={{flex: 1, fontSize: "1.1rem", fontWeight: "lighter", fontFamily: 'inherit'}}
                    >
                        <a href={"/"} style={{all: 'inherit', cursor: 'pointer'}}>
                            {this.title}
                        </a>
                    </Typography>
                    <ButtonGroup size={"large"} color={"inherit"} variant="text" aria-label="text button group">
                        {sections.map((section) => (
                            <Button key={section.title} href={section.url}>{section.title}</Button>
                        ))}
                    </ButtonGroup>
                </Toolbar>
                <div style={this.state.transparent ? {visibility: "hidden"} : {visibility: "visible"}}
                     className={styles.headerNavShadow}/>
            </header>
        );
    }
}

export default HeaderNav;