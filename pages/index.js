// Assets

// Components

// Containers
import {Header} from '../src/containers/Header/Header'
import Features from '../src/containers/Features/Features'
import Goals from "../src/containers/Goals/Goals";
import News from "../src/containers/News/News";
import Partners from '../src/containers/Partners/Partners.js'
import Footer from '../src/containers/Footer/Footer'

export default function Home() {

  return (
      <div className={'page-container'}>
        <div className={'content-container'}>
            <Header isComingSoon={false} />

            <Features />

            <Goals />

            <News />

            <Partners />
        </div>

        <Footer />
      </div>
  )

}
