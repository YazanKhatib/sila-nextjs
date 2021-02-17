// React Basic
import { useRouter } from 'next/router'

// Assets
import news_1 from '../../../assets/images/news/news_1.jpg'

// Components
import Button from "../../Button/Button";

export default function NewsCard(props) {

    const router = useRouter();

    return (
        <div className={'news-item'} onClick={() => {router.push('/blog/1')}}>
            <div className={'thumbnail-outer-container'}>
                <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${news_1})` }} />

                <img className={'hidden-image'} src={news_1} title="" alt=""/>

                <div className={'overlay'} />
            </div>

            <div className={'item-content'}>
                <span className={'date'}>{props.details.date}</span>
                <h2>{props.details.title}</h2>
                <p>{props.details.description}</p>

                <Button title={'استكشف ميزاتك الآن'} blueButtonTitle={'قراءة المزيد'} style={{width: '50%'}} type={'jumping'}/>
            </div>
        </div>
    );

}
