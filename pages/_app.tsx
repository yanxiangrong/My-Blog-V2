import { AppProps } from 'next/app'
import '../styles/global.css'
import '../styles/github.css'
import '../styles/video-react.css'; // import css


function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App