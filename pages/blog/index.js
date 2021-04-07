// React Basic
import React, {useState, useEffect} from 'react'
import {useRouter} from "next/router";

// Assets
import arrow from '../../src/assets/svg/arrow.svg'

// Components
import NewsCard from "../../src/components/Card/NewsCard/NewsCard";
import { PageLoader } from '../../src/components/Loader/Loader/LoginLoader'

// Containers
import {StickyHeader} from '../../src/containers/Header/Header'
import Footer from '../../src/containers/Footer/Footer'

// Services
import API, { URL } from "../../src/services/api/api"

// Lang
import {useTranslation} from "react-i18next";

export default function Blog() {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(0)

    const WEBAPI = new API()

    let limit = 9;

    const router = useRouter();

    const { i18n, t } = useTranslation();

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
        getData();
    }, [page])

    const refresh = () => {
        getData()
    }

    const getData = () => {
        setIsLoading(true)

        let query = {
            'limit': limit,
            'offset': page
        }

        WEBAPI.articles().articles( query ).then( response => {
            setIsLoading(false)

            setItems(response.data.data.results)
            setTotalPages(Math.ceil(response.data.data.total / limit))
        }).catch(error => {
        })
    }

    return (
        <div className={'page-container'}>
            <StickyHeader breadcrumbs={breadcrumbs} title={t('public.menu.blog')} />

            <div className={'content-container'}>
                {isLoading? <PageLoader /> : <section className={'news-section'} >
                    <div className={'news'}>
                        {Array.from(items).map((item, index) => {
                            return <NewsCard key={index} refresh={() => refresh()} details={{
                                thumbnail: item.url,
                                id: item.id,
                                title: item.title,
                                title_ar: item.title_ar,
                                description: item.body,
                                description_ar: item.body_ar,
                                date: new Date(item.created_at).toDateString()
                            }}/>
                        } )}
                    </div>

                    <div className={'pagination'}>
                        <div className={'inner-container'}>
                            <ul>
                                <li className={'prev'} onClick={() => { if(page > 0){setPage(page-1);} }}><img src={arrow} alt=""/></li>
                                { Array(totalPages).fill(0).map((item, index) => {
                                    return <li onClick={() => { if(index !== page){setPage(index);} }} className={index === page? 'active':''} key={index}><span>{index+1}</span></li>
                                }) }
                                <li className={'next'} onClick={() => { if(page+1 < totalPages){setPage(page+1);} }}><img src={arrow} alt=""/></li>
                            </ul>
                        </div>
                    </div>
                </section>}
            </div>

            <Footer />
        </div>
    )

}
