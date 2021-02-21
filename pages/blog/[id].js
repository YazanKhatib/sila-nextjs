// Assets
import news_1 from '../../src/assets/images/news/news_1.jpg'

// Components

// Containers
import {StickyHeader} from '../../src/containers/Header/Header'
import Footer from '../../src/containers/Footer/Footer'

// Lang
import {useTranslation} from "react-i18next";

export default function NewsSingle() {

    const { i18n, t } = useTranslation();

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
        <div className={'page-container ' + (i18n.language === 'ar'? 'rtl':'')}>
            <StickyHeader activeItem={'blog'} breadcrumbs={breadcrumbs} title={'التأقلم مع احتياجات مريضك للرعاية الصحية'} />

            <div className={'content-container'}>
                <div className={'news-single'}>
                    <div className={'content'}>
                        <div className={'img-container'}>
                            <img src={news_1} title="" alt=""/>
                        </div>

                        <h1 className={'title'}>التأقلم مع احتياجات مريضك للرعاية الصحية</h1>

                        <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                            إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                            ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.</p>

                        <div className={'share-buttons'}>
                            <div className={'share-button'}>
                                <i className="ion-social-facebook" aria-hidden="true" />
                            </div>

                            <div className={'share-button'}>
                                <i className="ion-social-twitter" aria-hidden="true" />
                            </div>

                            <div className={'share-button'}>
                                <i className="ion-social-linkedin" aria-hidden="true" />
                            </div>
                        </div>
                    </div>

                    <div className={'widgets'}>
                        <div className={'widget'}>
                            <div className={'widget-title'}>
                                <h5>الأكثر قراءة</h5>
                            </div>

                            <div className={'widget-body'}>
                                <div className={'news'}>
                                    <div className={'item'}>
                                        <div className={'thumbnail-container'} style={{ backgroundImage: `url(${news_1})` }}>
                                            <img className={'hidden-image'} src={news_1} title="" alt=""/>
                                        </div>

                                        <div className={'meta-data'}>
                                            <h6>التأقلم مع احتياجات مريضك للرعاية الصحية</h6>
                                            <span>ديسمبر 20-2020</span>
                                        </div>
                                    </div>

                                    <div className={'item'}>
                                        <div className={'thumbnail-container'} style={{ backgroundImage: `url(${news_1})` }}>
                                            <img className={'hidden-image'} src={news_1} alt=""/>
                                        </div>

                                        <div className={'meta-data'}>
                                            <h6>التأقلم مع احتياجات مريضك للرعاية الصحية</h6>
                                            <span>ديسمبر 20-2020</span>
                                        </div>
                                    </div>

                                    <div className={'item'}>
                                        <div className={'thumbnail-container'} style={{ backgroundImage: `url(${news_1})` }}>
                                            <img className={'hidden-image'} src={news_1} alt=""/>
                                        </div>

                                        <div className={'meta-data'}>
                                            <h6>التأقلم مع احتياجات مريضك للرعاية الصحية</h6>
                                            <span>ديسمبر 20-2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'widget'}>
                            <div className={'widget-title'}>
                                <h5>هاشتاغ</h5>
                            </div>

                            <div className={'widget-body'}>
                                <div className={'tags'}>
                                    <div className={'item'}><span>صحة</span></div>
                                    <div className={'item'}><span>مرضى</span></div>
                                    <div className={'item'}><span>كوفيد-19</span></div>
                                    <div className={'item'}><span>عائلة</span></div>
                                    <div className={'item'}><span>مرضى</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )

}
