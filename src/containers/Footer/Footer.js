// React Basic
import React, {useState} from 'react'
import { useRouter } from 'next/router'

// Assets
import logo_white_theme from "../../assets/images/logo/vertical_logo_dark_theme.png";
import market_1 from "../../assets/images/markets/market_1.png";
import market_2 from "../../assets/images/markets/market_2.png";

// Components

// Lang
import { useTranslation } from 'react-i18next';

export default function Footer() {

    const { i18n, t } = useTranslation();

    const router = useRouter();

    const [languageModalShow, setLanguageModalShow] = useState(false);
    const [languageModalActive, setLanguageModalActive] = useState(false);

    const languages = [
        {key: 'ar', value: 'العربية'},
        {key: 'en', value: 'English'},
    ];

    const openLanguageModal = () => {
        setLanguageModalShow(!languageModalShow)
        setTimeout(() => {
            setLanguageModalActive(!languageModalActive)
        }, 1)
    }

    const closeLanguageModal = () => {
        setLanguageModalActive(!languageModalActive)
        setTimeout(() => {
            setLanguageModalShow(!languageModalShow)
        }, 200)
    }

    const setLanguage = (key) => {
        i18n.changeLanguage(key);
        localStorage.setItem('lang', key);
        if(key === 'ar'){
            window.document.body.classList.add('rtl')
        }else{
            window.document.body.classList.remove('rtl')
        }
    }

    return (
        <footer>
            <div className={'top-side ' + (i18n.language === 'ar'? 'rtl':'')}>
                <div className={'logo-side'}>
                    <img src={logo_white_theme} alt="" onClick={() => {router.push('/')}}/>
                    <p>{t('public.footer.footer_tag_line')}</p>
                    <div className={'markets'}>
                        <img src={market_2} alt=""/>
                        <img src={market_1} alt=""/>
                    </div>
                </div>

                <div className={'contact-info-side'}>
                    <div className={'content'}>
                        <h5 className={'content-title'}>{t('public.footer.contact_info')}</h5>

                        <div className={'contact-info'}>
                            <ul>
                                <li><div className={'icon-container'}><i className="ion-android-call" aria-hidden="true" /></div><span>+963-997-798-554</span></li>
                                <li><div className={'icon-container'}><i className="ion-android-mail" aria-hidden="true" /></div><span>info@sila.com</span></li>
                                <li><div className={'icon-container'}><i className="ion-location" aria-hidden="true" /></div><span>{t('public.footer.location')}</span></li>
                            </ul>
                        </div>

                        <div className={'stay-toned'}>
                            <h5>{t('public.footer.stay_toned')}</h5>

                            <div className={'social-icons'}>
                                <ul>
                                    <li><i className="ion-social-linkedin" aria-hidden="true" /></li>
                                    <li><i className="ion-social-twitter" aria-hidden="true" /></li>
                                    <li><i className="ion-social-instagram" aria-hidden="true" /></li>
                                    <li><i className="ion-social-facebook" aria-hidden="true" /></li>
                                    <li><i className="ion-ios-paperplane" aria-hidden="true" /></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={'contact-us-side'}>
                    <h5>{t('public.footer.contact_us')}</h5>

                    <form action="">
                        <input type="text" name={'email'} id={'email'} placeholder={t('public.footer.email')}/>
                        <textarea name="message" id="message" rows="4" placeholder={t('public.footer.message')} />
                        <button onClick={(e) => { e.preventDefault() }}>{t('public.footer.send')}</button>
                    </form>
                </div>
            </div>

            <div className={'bottom-side ' + (i18n.language === 'ar'? 'rtl':'')}>
                <div className={'copy-right'}>
                    <span>{t('public.footer.copy_rights')}</span>
                </div>

                <div className={'lang-privacy-common-questions'}>
                    <span>{t('public.footer.faq')}</span>
                    <span>{t('public.footer.privacy_policy')}</span>
                    <span onClick={openLanguageModal}>{i18n.language === 'ar'? 'العربية':'English'}</span>
                </div>
            </div>

            { languageModalShow && <div className={'languages-modal ' + (languageModalActive? 'active':'')} onClick={closeLanguageModal}>
                <div className="model-inner-container" onClick={closeLanguageModal}>
                    <ul>
                        {
                            languages.map((item, index) => {
                                return <li key={index} className={item.key === i18n.language? 'active':''} onClick={() => { setLanguage(item.key); closeLanguageModal() }}>{item.value}</li>
                            })
                        }
                    </ul>
                </div>
            </div> }
        </footer>
    )

}
