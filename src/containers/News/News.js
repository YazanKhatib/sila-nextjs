// React Basic
import React, {useState, useEffect} from 'react'

// Assets

// Components
import NewsCard from "../../components/Card/NewsCard/NewsCard";
import { PageLoader } from '../../components/Loader/Loader/LoginLoader'

// Services
import API from "../../services/api/api"

// Lang
import { useTranslation } from 'react-i18next';

export default function News() {

    const { t } = useTranslation();

    const WEBAPI = new API()

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    let limit = 3;

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        setIsLoading(true)

        let query = {
            'limit': limit,
            'offset': 0
        }

        WEBAPI.articles().articles( query ).then( response => {
            setIsLoading(false)
            console.log(response.data.data.results)
            setItems(response.data.data.results)
        }).catch(error => {
        })
    }

    return (
        <section className={'latest-news-section'}>
            <div className={'section-title'}>
                <h1>{t('public.home.latest_news.title')}</h1>
            </div>

            <div className={'section-content'}>
                {isLoading? <PageLoader /> : <div className={'latest-news'}>
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
                </div>}
            </div>
        </section>
    )

}
