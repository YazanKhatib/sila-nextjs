// React Basic

// Assets
import news_1 from '../../../assets/images/news/news_1.jpg'

// Components
import Button from "../../Button/Button";

export default function NewsCard(props) {

    return (
        <div className={'news-item'}>
            <div className={'thumbnail-container'}>
                <img src={news_1} alt=""/>

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
