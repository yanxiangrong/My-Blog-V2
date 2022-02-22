import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <>
            <Typography variant="body2" color="text.secondary" align="center">
                <Link color="inherit" href="https://beian.miit.gov.cn/">
                    湘ICP备2020022339号-1
                </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://yandage.top/">
                    小荣
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </>

    );
}


export default function Footer() {
    return (
        <Box component="footer" sx={{bgcolor: 'background.paper', py: 6}}>
            <Container maxWidth="lg">
                {/*<Typography variant="h6" align="center" gutterBottom>*/}
                {/*    谢谢阅读*/}
                {/*</Typography>*/}
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    阳光洒进木屋，灰尘在飘扬，一束光落在采来的野草小花上，开窗迎接的是暖风，今天比昨天好一点点。
                </Typography>
                <Copyright/>
            </Container>
        </Box>
    );
}