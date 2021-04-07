// React Basic
import React, {useState, useEffect} from 'react'
import {useRouter} from "next/router";

// Lib
import { useMediaQuery } from 'react-responsive'

// Assets
import about_1 from '../../src/assets/images/about_us/about_1.png'
import about_2 from '../../src/assets/images/about_us/about_2.png'
import mission from '../../src/assets/svg/mission.svg'

// Components
import { PageLoader } from '../../src/components/Loader/Loader/LoginLoader'

// Containers
import {StickyHeader} from '../../src/containers/Header/Header'
import Footer from '../../src/containers/Footer/Footer'

// Services
import API, { URL } from "../../src/services/api/api";

// Lang
import {useTranslation} from "react-i18next";

export default function Blog() {

    const { i18n, t } = useTranslation();

    const router = useRouter();

    const [activeQuestion, setActiveQuestion] = useState('');

    const [membersItems, setMembersItems] = useState([])
    const [isMembersLoading, setIsMembersLoading] = useState(true)

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const WEBAPI = new API()

    let limit = 1000;

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        let query = {
            'limit': limit,
            'offset': 0
        }

        WEBAPI.partners().partners( query ).then( response => {
            setIsMembersLoading(false)
            setMembersItems(response.data.data.results)
        }).catch(error => {
        })
    }

    const breadcrumbs = [
        {
            title: t('public.menu.home'),
            onPress: () => {router.replace('/')}
        },
        {
            title: t('public.menu.about_us'),
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
            <StickyHeader breadcrumbs={breadcrumbs} title={t('public.menu.about_us')} />

            <div className={'content-container'}>
                <section className={'about-us'}>
                    <div className={'about-us-info'}>
                        <h2>{t('public.about_us.management_team.title')}</h2>
                        <p>{t('public.about_us.management_team.description')}</p>
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

                            <h3>{t('public.about_us.vision_mission.message.title')}</h3>
                        </div>

                        <div className={'item-content'}>
                            <p>{t('public.about_us.vision_mission.message.description')}</p>
                        </div>
                    </div>
                    <div />
                    <div className={'item'}>
                        <div className={'title-icon'}>
                            <div className={'icon-container'}>
                                <img src={mission} alt=""/>
                            </div>

                            <h3>{t('public.about_us.vision_mission.vision.title')}</h3>
                        </div>

                        <div className={'item-content'}>
                            <p>{t('public.about_us.vision_mission.vision.description')}</p>
                        </div>
                    </div>
                    <div />
                </section>

                <section className={'team-members'}>
                    <div className={'section-title'}>
                        <h1>{t('public.about_us.sila_team.title')}</h1>
                    </div>

                    <div className={'section-content'}>
                        {isMembersLoading? <PageLoader /> : <div className={'members'}>
                            { membersItems.map((item, index) => {
                                return <div key={index} className={'item'}>
                                    <div className={'thumbnail-outer-container'}>
                                        <img className={'hidden-image'} src={item['url']} title={item['name']} alt={item['name']}/>
                                        <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${URL}/${item['url'].replace(/\\/g, "/")}` }} />
                                        <div className={'overlay'} />
                                    </div>

                                    <div className={'item-info'}>
                                        <h6 className={'name'}>{i18n.language === 'en'? item['name']:item['name_ar']}</h6>
                                        <span className={'bio'}>{i18n.language === 'en'? item['bio']:item['bio_ar']}</span>
                                        <span className={'email'}>{item['email']}</span>
                                        <span className={'number'}>{item['number']}</span>
                                    </div>
                                </div>
                            }) }
                        </div>}
                    </div>
                </section>

                <section className={'privacy-policy'}>
                    <div className={'section-title'}>
                        <h1>{t('public.about_us.privacy_policy.title')}</h1>
                        <p>{t('public.about_us.privacy_policy.description')}</p>
                    </div>

                    <div className={'section-content'}>
                        <div className={'terms'}>
                            <div className={'item'}>
                                <div className={'icon'}><i className="ion-checkmark-round" aria-hidden="true" /></div>
                                <p>{t('public.about_us.privacy_policy.items.1')}</p>
                                <div className={'clear'} />
                            </div>

                            <div className={'item'}>
                                <div className={'icon'}><i className="ion-checkmark-round" aria-hidden="true" /></div>
                                <p>{t('public.about_us.privacy_policy.items.2')}</p>
                                <div className={'clear'} />
                            </div>

                            <div className={'item'}>
                                <div className={'icon'}><i className="ion-checkmark-round" aria-hidden="true" /></div>
                                <p>{t('public.about_us.privacy_policy.items.3')}</p>
                                <div className={'clear'} />
                            </div>

                            <div className={'item'}>
                                <div className={'icon'}><i className="ion-checkmark-round" aria-hidden="true" /></div>
                                <p>{t('public.about_us.privacy_policy.items.4')}</p>
                                <div className={'clear'} />
                            </div>

                            <div className={'item'}>
                                <div className={'icon'}><i className="ion-checkmark-round" aria-hidden="true" /></div>
                                <p>{t('public.about_us.privacy_policy.items.5')}</p>
                                <div className={'clear'} />
                            </div>

                            <div className={'item'}>
                                <div className={'icon'}><i className="ion-checkmark-round" aria-hidden="true" /></div>
                                <p>{t('public.about_us.privacy_policy.items.6')}</p>
                                <div className={'clear'} />
                            </div>
                        </div>
                    </div>
                </section>

                {/*<section className={'frequently-questions'}>*/}
                {/*    <div className={'section-title'}>*/}
                {/*        <h1>الأسئلة الشائعة</h1>*/}
                {/*    </div>*/}

                {/*    <div className={'section-content'}>*/}
                {/*        <div className={'questions-image'}>*/}
                {/*            <div className={'image'}>*/}
                {/*                <img src={about_3} alt=""/>*/}
                {/*            </div>*/}

                {/*            <div className={'questions'}>*/}
                {/*                {questions.map((item, index) => {*/}
                {/*                    return <div key={index} className={'item'}>*/}
                {/*                        <div className={'item-title'} onClick={() => {setActiveQuestion(item.title === activeQuestion? '': item.title);}}>*/}
                {/*                            <h6>{item.title}</h6>*/}

                {/*                            <div className={'icon-container ' + (activeQuestion === item.title? 'active':'')}>*/}
                {/*                                <i className={'ion-plus-round'} aria-hidden="true" />*/}
                {/*                            </div>*/}
                {/*                        </div>*/}

                {/*                        <div className={'item-description ' + (activeQuestion === item.title? 'active':'')}>*/}
                {/*                            <p>{item.description}</p>*/}
                {/*                        </div>*/}
                {/*                    </div>;*/}
                {/*                })}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </div>

            <section className={'map'}>
                <div className="e-map">
                    <iframe height={isTabletOrMobile? 260:400} width="100%" src={"https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"><a href="https://www.maps.ie/create-google-map/">Google map generator</a></iframe>
                </div>
            </section>

            <Footer />
        </div>
    )

}
