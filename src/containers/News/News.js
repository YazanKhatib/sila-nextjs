// React Basic

// Assets
import news_1 from '../../assets/images/news/news_1.jpg'

// Components
import Button from "../../components/Button/Button";

export default function News() {

    const renderNewsItem = (title, description, date) => {
        return <div className={'col-lg-4'}>
            <div className={'news-item'}>
                <div className={'thumbnail-container'}>
                    <img src={news_1} alt=""/>

                    <div className={'overlay'} />
                </div>

                <div className={'item-content'}>
                    <span className={'date'}>{date}</span>
                    <h2>{title}</h2>
                    <p>{description}</p>

                    <Button title={'استكشف ميزاتك الآن'} blueButtonTitle={'قراءة المزيد'} style={{width: '50%'}} type={'jumping'}/>
                </div>
            </div>
        </div>
    }

    return (
        <section className={'latest-news-section'}>
            <div className={'section-title'}>
                <h1>آخر الآخبار</h1>
            </div>

            <div className={'section-content'}>
                <div className={'latest-news'}>
                    <div className={'row'}>
                        {renderNewsItem('التأقلم مع احتياجات مريضك للرعاية الصحية', 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.', 'ديسمبر 20-2020')}
                        {renderNewsItem('التأقلم مع احتياجات مريضك للرعاية الصحية', 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.', 'ديسمبر 20-2020')}
                        {renderNewsItem('التأقلم مع احتياجات مريضك للرعاية الصحية', 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.', 'ديسمبر 20-2020')}
                    </div>
                </div>
            </div>
        </section>
    )

}
