// Assets

// Components

// Containers
import {StickyHeader} from '../src/containers/Header/Header'
import Footer from '../src/containers/Footer/Footer'

export default function ComingSoon() {

    const breadcrumbs = [
        {
            title: 'الصفحة الرئيسية',
            onPress: () => {}
        },
        {
            title: 'الأخبار',
            onPress: () => {}
        }
    ]

    return (
        <div className={'page-container'}>
            <StickyHeader breadcrumbs={breadcrumbs} title={'الأخبار'} />

            <div className={'content-container'}>
            </div>

            <Footer />
        </div>
    )

}
