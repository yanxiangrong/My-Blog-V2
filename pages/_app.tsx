import { AppProps } from 'next/app'
import '../styles/global.css'
import '../styles/github.css'

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App