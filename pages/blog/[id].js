// React Basic
import React, {useState, useEffect} from 'react'
import {useRouter} from "next/router";

// Assets

// Components
import { PageLoader } from '../../src/components/Loader/Loader/LoginLoader'

// Services
import API, { URL } from "../../src/services/api/api"

// Containers
import {StickyHeader} from '../../src/containers/Header/Header'
import Footer from '../../src/containers/Footer/Footer'

// Lang
import {useTranslation} from "react-i18next";

export default function NewsSingle() {

    const { i18n, t } = useTranslation();

    const WEBAPI = new API()

    const router = useRouter();

    const [data, setData] = useState({});
    const [items, setItems] = useState([]);

    const [isRelatedArticlesLoading, setIsRelatedArticlesLoading] = useState(true)
    const [isFetching, setIsFetching] = useState(true)

    const breadcrumbs = [
        {
            title: t('public.menu.home'),
            onPress: () => {router.replace('/')}
        },
        {
            title: t('public.menu.blog'),
            onPress: () => {}
        }
    ]

    useEffect(() => {
        getArticleData();
        getRelatedArticles()
    }, [])

    const getRelatedArticles = () => {
        let query = {
            'limit': 3,
            'offset': 0
        }

        WEBAPI.articles().articles( query ).then( response => {
            setItems(response.data.data.results)
            setIsRelatedArticlesLoading(false)
        }).catch(error => {
        })
    }

    const getArticleData = () => {
        const { id } = router.query;

        WEBAPI.articles().article( id || window.location.pathname.match(/[/](\d+)$/)[1] ).then( response => {
            setIsFetching(false)
            setData(response.data.data)
        }).catch(error => {
            setIsFetching(false)
        })
    }

    return (
        <div className={'page-container'}>
            <StickyHeader breadcrumbs={breadcrumbs} title={'' || (i18n.language === 'en'? data['title']:data['title_ar'])} />

            <div className={'content-container'}>
                {isFetching? <PageLoader /> : <div className={'news-single'}>
                    <div className={'content'}>
                        <div className={'img-container'}>
                            <img src={URL+'/'+data['url']} title={data['title']} alt={data['title']}/>
                        </div>

                        <h1 className={'title'}>{i18n.language === 'en'? data['title']:data['title_ar']}</h1>

                        <p>{i18n.language === 'en'? data['body']:data['body_ar']}</p>

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
                                <h5>{t('public.blog.most_read')}</h5>
                            </div>

                            <div className={'widget-body'}>
                                <div className={'news'}>
                                    { !isRelatedArticlesLoading && items.map((item, index) => {
                                        return <div onClick={() => { setData(item) }} key={index} className={'item'}>
                                            <div className={'thumbnail-container'} style={{ backgroundImage: `url(${URL}/${item['url'].replace(/\\/g, "/")})` }}>
                                                <img className={'hidden-image'} src={URL+'/'+item['url'].replace(/\\/g, "/")} title={item['title']} alt={item['title']}/>
                                            </div>

                                            <div className={'meta-data'}>
                                                <h6>{i18n.language === 'en'? item['title']:item['title_ar']}</h6>
                                                <span>{new Date(item['created_at']).toDateString()}</span>
                                            </div>
                                        </div>
                                    } )}
                                </div>
                            </div>
                        </div>

                        <div className={'widget'}>
                            <div className={'widget-title'}>
                                <h5>{t('public.blog.tags')}</h5>
                            </div>

                            <div className={'widget-body'}>
                                <div className={'tags'}>
                                    { i18n.language === 'en'? (data['tags'] && data['tags'].split(', ').map((item, index) => {
                                        return <div key={index} className={'item'}><span>{item}</span></div>
                                    })): (data['tags_ar'] && data['tags_ar'].split(', ').map((item, index) => {
                                        return <div key={index} className={'item'}><span>{item}</span></div>
                                    })) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>

            <Footer />
        </div>
    )

}
