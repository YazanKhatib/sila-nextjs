// Assets

// Components

// Containers
import Header from '../src/containers/Header/Header'

export default function ComingSoon() {

  return (
      <div className={'page-container coming-soon'}>
        <div className={'content-container'}>
            <Header isComingSoon={true} />
        </div>
      </div>
  )

}
