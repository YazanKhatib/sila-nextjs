// React Basic
import React, {useState} from 'react'

// Assets
import about_1 from '../../src/assets/images/about_us/about_1.png'
import about_2 from '../../src/assets/images/about_us/about_2.png'
import about_3 from '../../src/assets/images/about_us/about_3.png'
import member_1 from '../../src/assets/images/about_us/team_1.png'
import member_2 from '../../src/assets/images/about_us/team_2.png'
import member_3 from '../../src/assets/images/about_us/team_3.png'
import mission from '../../src/assets/svg/mission.svg'

// Components

// Containers
import {StickyHeader} from '../../src/containers/Header/Header'
import Footer from '../../src/containers/Footer/Footer'

export default function Blog() {

    const [activeQuestion, setActiveQuestion] = useState('');

    const breadcrumbs = [
        {
            title: 'الصفحة الرئيسية',
            onPress: () => {}
        },
        {
            title: 'تعرف علينا',
            onPress: () => {}
        }
    ]

    const questions = [
        {
            title: '1كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص'
        },
        {
            title: '2كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص'
        },
        {
            title: '3كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص'
        },
        {
            title: '4كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص'
        },
        {
            title: '5كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص'
        },
        {
            title: '6كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص'
        }
    ]

    return (
        <div className={'page-container'}>
            <StickyHeader breadcrumbs={breadcrumbs} title={'تعرف علينا'} />

            <div className={'content-container'}>
                <section className={'about-us'}>
                    <div className={'about-us-info'}>
                        <h2>تعرف علينا</h2>
                        <p> صلة هي اول شبكة طبية الكترونية في سوريا هدفنا تسهيل العملية الرعاية الصحية وتقديم الخدمات بشكل متكامل عن طريق تشبيك مع العديد من الأطباء المختصين والمشافي ومراكز
                            التحليل والاشعة والصيدليات.</p>
                        <p>حن نقدم أفضل الخدمات بطريقة مميزة تجعل صحتك وصحة عائلتك بأمان من خلال المتابعة اليومية وإمكانية جلب ممرض الى المنزل في حالات الطارئة  وخدمة البحث الالكترونية وحجز المواعيد الالكترونية ايضاً وطرح أفضل المقالات الطبية الهامة  التي تخصك انت وعائلتك.
                        </p>
                    </div>

                    <div className={'images'}>
                        <div className={'primary-img'}>
                            <img src={about_1} title="" alt=""/>
                        </div>

                        <div className={'secondary-img'} style={{ backgroundImage: `url(${about_2})`}} />
                    </div>
                </section>

                <section className={'vision-mission'}>
                    <div />

                    <div className={'item'}>
                        <div className={'title-icon'}>
                            <div className={'icon-container'}>
                                <img src={mission} alt=""/>
                            </div>

                            <h3>أهدافنا</h3>
                        </div>

                        <div className={'item-content'}>
                            <p> صلة هي اول شبكة طبية الكترونية في سوريا هدفنا تسهيل العملية الرعاية الصحية وتقديم الخدمات بشكل متكامل عن طريق تشبيك مع العديد من الأطباء المختصين والمشافي ومراكز
                                التحليل والاشعة والصيدليات.</p>
                        </div>
                    </div>

                    <div />

                    <div className={'item'}>
                        <div className={'title-icon'}>
                            <div className={'icon-container'}>
                                <img src={mission} alt=""/>
                            </div>

                            <h3>رؤيتنا</h3>
                        </div>

                        <div className={'item-content'}>
                            <p> صلة هي اول شبكة طبية الكترونية في سوريا هدفنا تسهيل العملية الرعاية الصحية وتقديم الخدمات بشكل متكامل عن طريق تشبيك مع العديد من الأطباء المختصين والمشافي ومراكز
                                التحليل والاشعة والصيدليات.</p>
                        </div>
                    </div>

                    <div />
                </section>

                <section className={'team-members'}>
                    <div className={'section-title'}>
                        <h1>فريق صِلَة</h1>
                    </div>

                    <div className={'section-content'}>
                        <div className={'members'}>
                            <div className={'item'}>
                                <div className={'thumbnail-outer-container'}>
                                    <img className={'hidden-image'} src={member_3} title="" alt=""/>
                                    <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${member_3})` }} />
                                    <div className={'overlay'} />
                                </div>

                                <div className={'item-info'}>
                                    <h6>عدي الشامي</h6>
                                    <span>مؤسس شبكة صلة</span>
                                </div>
                            </div>

                            <div className={'item'}>
                                <div className={'thumbnail-outer-container'}>
                                    <img className={'hidden-image'} src={member_2} title="" alt=""/>
                                    <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${member_2})` }} />
                                    <div className={'overlay'} />
                                </div>

                                <div className={'item-info'}>
                                    <h6>أحمد خالد</h6>
                                    <span>شريك مؤسس</span>
                                </div>
                            </div>

                            <div className={'item'}>
                                <div className={'thumbnail-outer-container'}>
                                    <img className={'hidden-image'} src={member_1} title="" alt=""/>
                                    <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${member_1})` }} />
                                    <div className={'overlay'} />
                                </div>

                                <div className={'item-info'}>
                                    <h6>هلا عبيدي</h6>
                                    <span>مسؤولة التسويق</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={'privacy-policy'}>
                    <div className={'section-title'}>
                        <h1>سياسة الخصوصية</h1>
                        <p>معنا انت صرت بأمان ولانو نحن بهمنا أمانك قام فريق صلة الطبي بالحفاظ على سرية بياناتك الشخصية</p>
                    </div>

                    <div className={'section-content'}>
                        <div className={'terms'}>
                            <div className={'item'}>
                                <div className={'icon'}>
                                    <i className="ion-checkmark-round" aria-hidden="true" />
                                </div>

                                <p>المسح الأولي والمنتظم لمكافحة الفيروسات للمستندات التي تم تحميلها ومراقبة النظام في حال اكتشاف أي نشاط مشبوه</p>

                                <div className={'clear'} />
                            </div>

                            <div className={'item'}>
                                <div className={'icon'}>
                                    <i className="ion-checkmark-round" aria-hidden="true" />
                                </div>

                                <p>جميع البيانات والمعلومات التي يتم جمعها عن المرضى والأطباء محمية بشكل كامل ولا يمكن اختراقها.</p>

                                <div className={'clear'} />
                            </div>

                            <div className={'item'}>
                                <div className={'icon'}>
                                    <i className="ion-checkmark-round" aria-hidden="true" />
                                </div>

                                <p>نؤمن لك حماية سجلك الطبي ولا يمكن لأحد معرفة معلوماتك وحالتك الصحية غير طبيبك المختص.</p>

                                <div className={'clear'} />
                            </div>

                            <div className={'item'}>
                                <div className={'icon'}>
                                    <i className="ion-checkmark-round" aria-hidden="true" />
                                </div>

                                <p>نظام حماية لمنع الوصول غير المصرح به (شبكات مشابها \هكر)</p>

                                <div className={'clear'} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={'frequently-questions'}>
                    <div className={'section-title'}>
                        <h1>الأسئلة الشائعة</h1>
                    </div>

                    <div className={'section-content'}>
                        <div className={'questions-image'}>
                            <div className={'image'}>
                                <img src={about_3} alt=""/>
                            </div>

                            <div className={'questions'}>
                                {questions.map((item, index) => {
                                    return <div key={index} className={'item'}>
                                        <div className={'item-title'} onClick={() => {setActiveQuestion(item.title == activeQuestion? '':item.title);}}>
                                            <h6>{item.title}</h6>

                                            <div className={'icon-container ' + (activeQuestion == item.title? 'active':'')}>
                                                <i className={'ion-plus-round'} aria-hidden="true" />
                                            </div>
                                        </div>

                                        <div className={'item-description ' + (activeQuestion == item.title? 'active':'')}>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>;
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className={'map'}>
                <div className="e-map">
                    <iframe height="400" width="100%" src={"https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"><a href="https://www.maps.ie/create-google-map/">Google map generator</a></iframe>
                </div>
            </section>

            <Footer />
        </div>
    )

}
