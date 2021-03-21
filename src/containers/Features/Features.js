// React Basic

// Assets
import feature_1 from "../../assets/images/features/feature_1.jpg";
import feature_2 from "../../assets/images/features/feature_2.jpg";

// Components
import Button from "../../components/Button/Button";

// Lang
import { useTranslation } from 'react-i18next';

export default function Features() {

    const { t } = useTranslation();

    return (
        <section className={'features-section'}>
            <div className={'section-title'}>
                <h1>{t('public.home.features.title')}</h1>
            </div>

            <div className={'section-content'}>
                <div className={'features'}>
                    <div className={'feature'}>
                        <div className={'thumbnail-outer-container'}>
                            <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${feature_1})` }} />
                            <img className={'hidden-image'} src={feature_1} title="" alt=""/>
                            <div className={'overlay'} />
                        </div>

                        <div className={'feature-content'}>
                            <p>{t('public.home.features.items.1.description')}</p>
                            <Button title={t('public.button.primary_title_1')} blueButtonTitle={t('public.button.secondary_title_1')} style={{width: '50%'}}/>
                        </div>
                    </div>

                    <div className={'feature'}>
                        <div className={'thumbnail-outer-container'}>
                            <div className={'thumbnail-inner-container'} style={{ backgroundImage: `url(${feature_2})` }} />
                            <img className={'hidden-image'} src={feature_2} title="" alt=""/>
                            <div className={'overlay'} />
                        </div>

                        <div className={'feature-content'}>
                            <p>{t('public.home.features.items.2.description')}</p>
                            <Button title={t('public.button.primary_title_1')} blueButtonTitle={t('public.button.secondary_title_1')} style={{width: '50%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
