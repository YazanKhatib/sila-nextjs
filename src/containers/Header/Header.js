// React Basic
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";

// Assets
import bigRectangle from '../../assets/svg/background/big_rectangle.svg'
import bigRectangleRTL from '../../assets/svg/background/big_rectangle_rtl.svg'
import right_image from '../../assets/images/background/home_right.jpg'
import logo from '../../assets/svg/logo/vertical_logo_light_theme.png'
import mockup from '../../assets/svg/mobile_moukup.svg'
import play from '../../assets/svg/play.svg'
import market_2 from "../../assets/images/markets/market_2.png";
import market_1 from "../../assets/images/markets/market_1.png";
import background_blog from '../../assets/images/background/background_blog.jpg'

// Lang
import { useTranslation } from 'react-i18next';

export function Header(props) {

    const { t, i18n } = useTranslation();

    const router = useRouter();

    return (
        <div className={'header ' + (i18n.language === 'ar'? 'rtl':'')}>
            <div className={'big-rectangle'}>
                <img src={i18n.language === 'ar'? bigRectangleRTL:bigRectangle} alt=""/>
            </div>

            <svg className="clip-path">
                <clipPath id="small-rectangle-clip-path-rtl" clipPathUnits="objectBoundingBox">
                    <path d="M1,0 L0.082,0.475 c-0.12,0.062,-0.085,0.138,0.038,0.183 l0.888,0.342 L1,0" />
                </clipPath>

                <clipPath id="small-rectangle-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M0,0 l0.926,0.475 c0.12,0.062,0.085,0.138,-0.038,0.183 L0,1 L0,0" />
                </clipPath>
            </svg>

            <div className={'small-rectangle home-page'}>
                <div className="clip" style={{ backgroundImage: `url(${right_image})` }}>
                    <div className="overlay" />
                </div>
            </div>

            <div className={'top-nav'}>
                <div className={'logo-side'} onClick={() => { router.push('/') }}>
                    <img src={logo} alt=""/>
                </div>

                <div className={'menu-side'}>
                    <ul className={'menu'}>
                        <li className={'active'}><span>{t('public.menu.home')}</span></li>
                        <li><Link href={'/health_care_professionals'}><span>{t('public.menu.health_care_professionals')}</span></Link></li>
                        <li><Link href={'/for_you_and_your_family'}><span>{t('public.menu.for_you_and_your_family')}</span></Link></li>
                        <li><Link href={'/about_us'}><span>{t('public.menu.about_us')}</span></Link></li>
                        <li><Link href={'/blog'}><span>{t('public.menu.blog')}</span></Link></li>

                    </ul>
                </div>
            </div>

            <div className={'header-body'} style={{alignItems: 'center'}}>
                <div className={'welcome-message'}>
                    <h1>صلة طبيبك بأيدك</h1>

                    <p>نحن نجعل الرعاية الصحية ذات جودة عالية والخدمات المقدمة في متناول يديك صلة
                        الأكثر سرعة يقدم لكم أكثر من 1000 طبيب معتمد وموثوق وبكافة الاختصاصات
                        لتقديم استشارات طبية والخدمات الصحية مع المتابعة اليومية بأقل تكلفة وأسرع وقت</p>

                    <div className={'header-button'}>
                        <div className={'icon-container'}>
                            <img src={play} alt=""/>
                        </div>
                        <span>شاهد الفيديو الخاص بنا</span>
                    </div>

                </div>

                <div className={'mockup'}>
                    <img src={mockup} alt="..."/>

                    <div className={'markets'}>
                        <img src={market_2} alt=""/>
                        <img src={market_1} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export function StickyHeader(props) {

    const { t, i18n } = useTranslation();

    const router = useRouter();

    return (
        <div className={'header sticky-header ' +(i18n.language === 'ar'? 'rtl':'')}>
            <div className={'top-nav'}>
                <div className={'logo-side'} onClick={() => {router.push('/')}}>
                    <img src={logo} alt=""/>
                </div>

                <div className={'menu-side'}>
                    <ul className={'menu'}>
                        <li><Link href={'/'}><span>{t('public.menu.home')}</span></Link></li>
                        <li className={props.activeItem == 'health_care'? 'active':''}><Link href={'/health_care_professionals'}><span>{t('public.menu.health_care_professionals')}</span></Link></li>
                        <li className={props.activeItem == 'for_you_and_your_family'? 'active':''}><Link href={'/for_you_and_your_family'}><span>{t('public.menu.for_you_and_your_family')}</span></Link></li>
                        <li className={props.activeItem == 'about_us'? 'active':''}><Link href={'/about_us'}><span>{t('public.menu.about_us')}</span></Link></li>
                        <li className={props.activeItem == 'blog'? 'active':''}><Link href={'/blog'}><span>{t('public.menu.blog')}</span></Link></li>
                    </ul>
                </div>
            </div>

            <div className={'header-body'}>
                <div style={{ background: `url(${background_blog}) no-repeat`, backgroundPosition: 'center center', backgroundSize: 'cover'}} className={'title-breadcrumbs-container'}>
                    <div className={'outer-container'}>
                        <div className={'content-container'}>
                            <div className={'title'}>
                                <h1>{props.title}</h1>
                            </div>

                            <div className={'breadcrumbs'}>
                                <ul>
                                    {props.breadcrumbs.map((item, index) => {
                                        return <li key={index}><span>{item.title}</span> {props.breadcrumbs.length > (index+1)? <span className={'sep'}>/</span>:<></> }</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
