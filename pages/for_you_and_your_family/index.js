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

export default function ForYouAndYourFamily() {

    const { t } = useTranslation();

    const breadcrumbs = [
        {
            title: t('public.menu.home'),
            onPress: () => {}
        },
        {
            title: t('public.menu.for_you_and_your_family'),
            onPress: () => {}
        }
    ]

    const items = [
        {
            'title': t('public.for_you_and_your_family.items.1.title'),
            'content': [
                {'type': 'text', 'data': t('public.for_you_and_your_family.items.1.items.1.data')},
                {'type': 'text', 'data': t('public.for_you_and_your_family.items.1.items.2.data')},
                {'type': 'list', 'data': [
                        t('public.for_you_and_your_family.items.1.items.3.data.1'),
                        t('public.for_you_and_your_family.items.1.items.3.data.2'),
                        t('public.for_you_and_your_family.items.1.items.3.data.3'),
                        t('public.for_you_and_your_family.items.1.items.3.data.4'),
                        t('public.for_you_and_your_family.items.1.items.3.data.5'),
                        t('public.for_you_and_your_family.items.1.items.3.data.6'),
                        t('public.for_you_and_your_family.items.1.items.3.data.7'),
                        t('public.for_you_and_your_family.items.1.items.3.data.8'),
                    ]
                },
                {'type': 'text', 'data': t('public.for_you_and_your_family.items.1.items.4.data')}
            ]
        },
        {
            'title': t('public.for_you_and_your_family.items.2.title'),
            'content': [
                {'type': 'text', 'data': t('public.for_you_and_your_family.items.2.items.1.data')},
                {'type': 'list', 'data': [
                        t('public.for_you_and_your_family.items.2.items.2.data.1'),
                        t('public.for_you_and_your_family.items.2.items.2.data.2'),
                        t('public.for_you_and_your_family.items.2.items.2.data.3'),
                        t('public.for_you_and_your_family.items.2.items.2.data.4'),
                        t('public.for_you_and_your_family.items.2.items.2.data.5')
                    ]
                },
                {'type': 'text', 'data': t('public.for_you_and_your_family.items.2.items.3.data')},
                {'type': 'text', 'data': t('public.for_you_and_your_family.items.2.items.4.data')}
            ]
        },
        {
            'title': t('public.for_you_and_your_family.items.3.title'),
            'content': [
                {'type': 'text', 'data': t('public.for_you_and_your_family.items.3.items.1.data')},
            ]
        },
        {
            'title': t('public.for_you_and_your_family.items.4.title'),
            'content': [
                {'type': 'text', 'data': t('public.for_you_and_your_family.items.4.items.1.data')},
            ]
        },
        {
            'title': t('public.for_you_and_your_family.items.5.title'),
            'content': [
                {'type': 'text', 'data': t('public.for_you_and_your_family.items.5.items.1.data')},
            ]
        },
        {
            'title': t('public.for_you_and_your_family.items.6.title'),
            'content': [
                {'type': 'text', 'data': t('public.for_you_and_your_family.items.6.items.1.data')},
            ]
        },
        {
            'title': t('public.for_you_and_your_family.items.7.title'),
            'content': [
                {'type': 'text', 'data': t('public.for_you_and_your_family.items.7.items.1.data')},
            ]
        },
    ]

    const [activeItem, setActiveItem] = useState(items[0]);

    return (
        <div className={'page-container'}>
            <StickyHeader breadcrumbs={breadcrumbs} title={t('public.menu.for_you_and_your_family')} />

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
                                return <ul key={index}>{item.data.map((i, index) => {
                                    return <li key={index}><div className={'dot'}/><p>{i}</p></li>;
                                    })}</ul>
                            } else if(item.type === 'text') {
                                return <p key={index}>{item.data}</p>
                            }
                        })}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )

}
