// React Basic

// Assets

// Components
import NewsCard from "../../components/Card/NewsCard/NewsCard";

export default function News() {

    return (
        <section className={'latest-news-section'}>
            <div className={'section-title'}>
                <h1>آخر الآخبار</h1>
            </div>

            <div className={'section-content'}>
                <div className={'latest-news'}>
                    <NewsCard details={{title: 'التأقلم مع احتياجات مريضك للرعاية الصحية', description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.', date: 'ديسمبر 20-2020'}} />
                    <NewsCard details={{title: 'التأقلم مع احتياجات مريضك للرعاية الصحية', description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.', date: 'ديسمبر 20-2020'}} />
                    <NewsCard details={{title: 'التأقلم مع احتياجات مريضك للرعاية الصحية', description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.', date: 'ديسمبر 20-2020'}} />
                </div>
            </div>
        </section>
    )

}
