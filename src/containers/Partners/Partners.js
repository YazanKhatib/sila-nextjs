// React Basic

// Assets
import partner_1 from '../../assets/images/partners/partnar_1.png'

// Components

// Lang
import { useTranslation } from 'react-i18next';

export default function Partners() {

    const { t } = useTranslation();

    return (
        <section className={'partners-section'}>
            <div className={'section-title'}>
                <h1 className={'without-margin'}>{t('public.home.partners.title')}</h1>
                <p>{t('public.home.partners.description')}</p>
            </div>

            <div className={'section-content'}>
                <div className={'partners'}>
                    <div className={'item'}><img src={partner_1} alt=""/></div>
                    <div className={'item'}><img src={partner_1} alt=""/></div>
                    <div className={'item'}><img src={partner_1} alt=""/></div>
                    <div className={'item'}><img src={partner_1} alt=""/></div>
                    <div className={'item'}><img src={partner_1} alt=""/></div>

                    <div className={'clear'}></div>
                </div>
            </div>
        </section>
    )

}
