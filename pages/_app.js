// Stylesheet
import '../src/assets/css/main.css'
import '../src/assets/css/grid-system.css'
import '../src/assets/css/ionicons.min.css'

import '../src/containers/Header/Header.css'
import '../src/containers/Features/Features.css'
import '../src/containers/Goals/Goals.css'
import '../src/containers/News/News.css'
import '../src/containers/Partners/Partners.css'
import '../src/containers/Footer/Footer.css'

import '../src/components/Button/Button.css'
import '../src/components/Card/NewsCard/NewsCard.css'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}