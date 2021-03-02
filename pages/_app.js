// Stylesheet
import '../src/assets/css/main.css'
import '../src/assets/css/ionicons.min.css'

import '../pages/blog/Blog.css'
import '../pages/about_us/AboutUs.css'
import '../pages/health_care_professionals/HealthCareProfessionals.css'
import '../pages/for_you_and_your_family/ForYouAndYourFamily.css'

import '../src/containers/Header/Header.css'
import '../src/containers/Features/Features.css'
import '../src/containers/Goals/Goals.css'
import '../src/containers/News/News.css'
import '../src/containers/Partners/Partners.css'
import '../src/containers/Footer/Footer.css'

import '../src/components/Button/Button.css'
import '../src/components/Card/NewsCard/NewsCard.css'

// Lang
import '../src/languages/i18n'

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}