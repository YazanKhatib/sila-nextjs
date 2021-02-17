// React Basic

// Assets
import feature_1 from "../../assets/images/features/feature_1.jpg";
import feature_2 from "../../assets/images/features/feature_2.jpg";

// Components
import Button from "../../components/Button/Button";
import news_1 from "../../assets/images/news/news_1.jpg";

export default function Features() {

    return (
        <section className={'features-section'}>
            <div className={'section-title'}>
                <h1>الميزات</h1>
            </div>

            <div className={'section-content'}>
                <div className={'features'}>
                    <div className={'feature'}>
                        <div className={'thumbnail-outer-container'}>
                            <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${feature_1})` }} />

                            <img className={'hidden-image'} src={feature_1} title="" alt=""/>

                            <div className={'overlay'} />
                        </div>

                        <div className={'feature-content'}>
                            <p>تقدم شبكة صلة الطبية الكترونية مجموعة متنوعة من الخدمات الطبية التي تتراوح من الجراحين و الأطباء من كافة الاختصاصات والمراكز الاشعة والمستشفيات والعيادات ومخابر التحليل و صيدليات</p>
                            <Button title={'استكشف ميزاتك الآن'} blueButtonTitle={'المزيد من الميزات'} style={{width: '40%'}}/>
                        </div>
                    </div>

                    <div className={'feature'}>
                        <div className={'thumbnail-outer-container'}>
                            <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${feature_2})` }} />

                            <img className={'hidden-image'} src={feature_2} title="" alt=""/>

                            <div className={'overlay'} />
                        </div>

                        <div className={'feature-content'}>
                            <p>تقدم شبكة صلة الطبية الكترونية مجموعة متنوعة من الخدمات الطبية التي تتراوح من الجراحين و الأطباء من كافة الاختصاصات والمراكز الاشعة والمستشفيات والعيادات ومخابر التحليل و صيدليات</p>
                            <Button title={'استكشف ميزاتك الآن'} blueButtonTitle={'المزيد من الميزات'} style={{width: '40%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
