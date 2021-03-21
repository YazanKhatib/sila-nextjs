// React Basic
import React, {useState} from 'react'

// Assets
import category_1 from '../../src/assets/images/categories/1.jpg'
// import category_2 from '../../src/assets/images/categories/2.jpg'
// import category_3 from '../../src/assets/images/categories/3.jpg'
// import category_4 from '../../src/assets/images/categories/4.jpg'
// import category_5 from '../../src/assets/images/categories/5.jpg'

// Components

// Containers
import {StickyHeader} from '../../src/containers/Header/Header'
import Footer from '../../src/containers/Footer/Footer'

// Lang
import {useTranslation} from "react-i18next";

export default function HealthCareProfessionals() {

    const { t } = useTranslation();

    const breadcrumbs = [
        {
            title: t('public.menu.home'),
            onPress: () => {}
        },
        {
            title: t('public.menu.health_care_professionals'),
            onPress: () => {}
        }
    ]

    const items = [
        {
            'title': t('public.health_care_professionals.items.1.title'),
            'content': [
                {'type': 'list', 'data': [
                        {'title': t('public.health_care_professionals.items.1.items.1.title'), 'data': t('public.health_care_professionals.items.1.items.1.data')},
                        {'title': t('public.health_care_professionals.items.1.items.2.title'), 'data': t('public.health_care_professionals.items.1.items.2.data')},
                        {'title': t('public.health_care_professionals.items.1.items.3.title'), 'data': t('public.health_care_professionals.items.1.items.3.data')},
                        {'title': t('public.health_care_professionals.items.1.items.4.title'), 'data': t('public.health_care_professionals.items.1.items.4.data')},
                        {'title': t('public.health_care_professionals.items.1.items.5.title'), 'data': t('public.health_care_professionals.items.1.items.5.data')},
                        {'title': t('public.health_care_professionals.items.1.items.6.title'), 'data': t('public.health_care_professionals.items.1.items.6.data')},
                        {'title': t('public.health_care_professionals.items.1.items.7.title'), 'data': t('public.health_care_professionals.items.1.items.7.data')},
                        {'title': t('public.health_care_professionals.items.1.items.8.title'), 'data': t('public.health_care_professionals.items.1.items.8.data')},
                        {'title': t('public.health_care_professionals.items.1.items.9.title'), 'data': t('public.health_care_professionals.items.1.items.9.data')},
                    ]
                }
            ]
        }
    ]

    const [activeItem, setActiveItem] = useState(items[0]);
    const [activeQuestion, setActiveQuestion] = useState('');

    return (
        <div className={'page-container'}>
            <StickyHeader breadcrumbs={breadcrumbs} title={t('public.menu.health_care_professionals')} />

            <div className={'content-container'}>
                <section className={'categories'}>
                    {items.map((item, index) => {
                        return <div className={'item'} onClick={() => setActiveItem(item)}>
                            <div className={'thumbnail-outer-container'}>
                                <img className={'hidden-image'} src={category_1} title="" alt=""/>
                                <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${category_1})` }} />
                                <div className={'overlay'} />
                                <div className={'title-container'}>
                                    <h1>{item.title}</h1>
                                </div>
                            </div>
                        </div>
                    })}
                </section>

                <section className={'questions'}>
                    <h1>{activeItem.title}</h1>

                    <div className={'items'}>
                        {activeItem.content.map((item, index) => {
                            if(item.type === 'list'){
                                return item.data.map((i, index) => {
                                    return <div key={index} className={'item'}>
                                        <div className={'item-title'} onClick={() => {setActiveQuestion(i.title === activeQuestion? '':i.title);}}>
                                            <h6>{i.title}</h6>

                                            <div className={'icon-container ' + (activeQuestion === i.title? 'active':'')}>
                                                <i className={'ion-plus-round'} aria-hidden="true" />
                                            </div>
                                        </div>

                                        <div className={'item-description ' + (activeQuestion === i.title? 'active':'')}>
                                            <p>{i.data}</p>
                                        </div>
                                    </div>
                                })
                            }else{
                                return <></>
                            }
                        })}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )

}
