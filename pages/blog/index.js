// Assets
import arrow from '../../src/assets/svg/arrow.svg'

// Components

// Containers
import {StickyHeader} from '../../src/containers/Header/Header'
import Footer from '../../src/containers/Footer/Footer'
import NewsCard from "../../src/components/Card/NewsCard/NewsCard";

export default function Blog() {

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
                <section className={'news-section'} >
                    <div className={'news'}>
                        <NewsCard details={{title: 'التأقلم مع احتياجات مريضك للرعاية الصحية', description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.', date: 'ديسمبر 20-2020'}} />
                        <NewsCard details={{title: 'التأقلم مع احتياجات مريضك للرعاية الصحية', description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.', date: 'ديسمبر 20-2020'}} />
                        <NewsCard details={{title: 'التأقلم مع احتياجات مريضك للرعاية الصحية', description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.', date: 'ديسمبر 20-2020'}} />
                        <NewsCard details={{title: 'التأقلم مع احتياجات مريضك للرعاية الصحية', description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.', date: 'ديسمبر 20-2020'}} />
                        <NewsCard details={{title: 'التأقلم مع احتياجات مريضك للرعاية الصحية', description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.', date: 'ديسمبر 20-2020'}} />
                    </div>

                    <div className={'pagination'}>
                        <div className={'inner-container'}>
                            <ul>
                                <li className={'prev'}><img src={arrow} alt=""/></li>
                                <li className={'active'}><span>1</span></li>
                                <li><span>2</span></li>
                                <li><span>3</span></li>
                                <li className={'next'}><img src={arrow} alt=""/></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )

}
