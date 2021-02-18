// React Basic
import React, {useState} from 'react'

// Assets
import category_1 from '../../src/assets/images/categories/1.jpg'
import category_2 from '../../src/assets/images/categories/2.jpg'
import category_3 from '../../src/assets/images/categories/3.jpg'
import category_4 from '../../src/assets/images/categories/4.jpg'
import category_5 from '../../src/assets/images/categories/5.jpg'

// Components

// Containers
import {StickyHeader} from '../../src/containers/Header/Header'
import Footer from '../../src/containers/Footer/Footer'

export default function HealthCareProfessionals() {

    const [activeQuestion, setActiveQuestion] = useState('');

    const breadcrumbs = [
        {
            title: 'الصفحة الرئيسية',
            onPress: () => {}
        },
        {
            title: 'متخصصي الرعاية',
            onPress: () => {}
        }
    ]

    const questions = [
        {
            title: '1كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص',
            lists: [
                {
                    title: '1كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
                    description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص',
                },
                {
                    title: '1كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
                    description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص',
                },

            ]
        },
        {
            title: '2كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
            description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص',
            lists: [
                {
                    title: '1كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
                    description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص',
                },
                {
                    title: '1كيف يمكنني أن أصبح طبيباً معتمداً من قبل شبكة صلة؟',
                    description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص',
                },

            ]
        },
    ]

    return (
        <div className={'page-container'}>
            <StickyHeader activeItem={'health_care'} breadcrumbs={breadcrumbs} title={'لمتخصصي الرعاية'} />

            <div className={'content-container'}>
                <section className={'categories'}>
                    <div className={'item'}>
                        <div className={'thumbnail-outer-container'}>
                            <img className={'hidden-image'} src={category_1} title="" alt=""/>
                            <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${category_1})` }} />
                            <div className={'overlay'} />
                            <div className={'title-container'}>
                                <h1>الطبيب</h1>
                            </div>
                        </div>
                    </div>

                    <div className={'item'}>
                        <div className={'thumbnail-outer-container'}>
                            <img className={'hidden-image'} src={category_2} title="" alt=""/>
                            <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${category_2})` }} />
                            <div className={'overlay'} />
                            <div className={'title-container'}>
                                <h1>المشفى</h1>
                            </div>
                        </div>
                    </div>

                    <div className={'item'}>
                        <div className={'thumbnail-outer-container'}>
                            <img className={'hidden-image'} src={category_3} title="" alt=""/>
                            <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${category_3})` }} />
                            <div className={'overlay'} />
                            <div className={'title-container'}>
                                <h1>مراكز التحليل</h1>
                            </div>
                        </div>
                    </div>

                    <div className={'item'}>
                        <div className={'thumbnail-outer-container'}>
                            <img className={'hidden-image'} src={category_4} title="" alt=""/>
                            <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${category_4})` }} />
                            <div className={'overlay'} />
                            <div className={'title-container'}>
                                <h1>مراكز الأشعة</h1>
                            </div>
                        </div>
                    </div>

                    <div className={'item'}>
                        <div className={'thumbnail-outer-container'}>
                            <img className={'hidden-image'} src={category_5} title="" alt=""/>
                            <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${category_5})` }} />
                            <div className={'overlay'} />
                            <div className={'title-container'}>
                                <h1>الصيدلاني</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={'questions'}>
                    <h1>الطبيب</h1>

                    <div className={'items'}>
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
                                    <ul>
                                        {item.lists.map((item, index) => {
                                            return <li key={index}><div className={'dot'} /><div><h6>{item.title}</h6><p>{item.description}</p></div></li>
                                        })}
                                    </ul>
                                </div>
                            </div>;
                        })}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )

}
