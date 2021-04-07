// React Basic
import { useRouter } from 'next/router'

// Assets

// Components
import Button from "../../Button/Button";

// Lang
import { useTranslation } from 'react-i18next';

// Services
import { URL } from "../../../services/api/api"

export default function NewsCard(props) {

    const { t, i18n } = useTranslation();

    const router = useRouter();

    const getWords = (str, wordsNum = 6) => {
        return !str ? '':str.toString().split(/\s+/).slice(0, wordsNum).join(" ") + (str.length > (wordsNum*9)? "...":"");
    }

    return (
        <div className={'news-item'} onClick={() => {router.push(`/blog/${props.details.id}`)}}>
            <div className={'thumbnail-outer-container'}>
                <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${URL}/${props.details.thumbnail.replace(/\\/g, "/")})` }} />
                <img className={'hidden-image'} src={URL+'/'+props.details.thumbnail} title={props.details.title} alt={props.details.title}/>
                <div className={'overlay'} />
            </div>

            <div className={'item-content'}>
                <span className={'date'}>{props.details.date}</span>
                <h2>{getWords(i18n.language === 'en'? props.details.title:props.details.title_ar)}</h2>
                <p>{getWords(i18n.language === 'en'? props.details.description:props.details.description_ar, 11)}</p>

                <Button title={t('public.button.primary_title_1')} blueButtonTitle={t('public.button.secondary_title_2')} style={{width: '80%'}} type={'jumping'}/>
            </div>
        </div>
    );

}
