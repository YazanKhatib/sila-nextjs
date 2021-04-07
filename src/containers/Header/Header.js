// React Basic
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";

// Lib
import { useMediaQuery } from 'react-responsive'

// Assets
import bigRectangle from '../../assets/svg/background/big_rectangle.svg'
import bigRectangleRTL from '../../assets/svg/background/big_rectangle_rtl.svg'
import smallImage from '../../assets/images/background/home_right.png'
import logo from '../../assets/images/logo/vertical_logo_light_theme.png'
import whiteLogo from '../../assets/svg/logo/white_logo.svg'
import mockup from '../../assets/svg/mobile_moukup.svg'
import market_2 from "../../assets/images/markets/market_2.png";
import market_1 from "../../assets/images/markets/market_1.png";
import backgroundBlog from '../../assets/images/background/background_blog.png'

// Lang
import { useTranslation } from 'react-i18next';

export function Header() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 950px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const [isDrawerOpened, setIsDrawerOpened] = useState(false)
    const [isDrawerActive, setIsDrawerActive] = useState(false)
    const [activeTab, setActiveTab] = useState('')

    const { t } = useTranslation();

    const router = useRouter();

    useEffect(() => {
        let regularExpression = /[^/](\w)*[^/]/;
        setActiveTab(regularExpression.exec(router.pathname) !== null? regularExpression.exec(router.pathname)[0]:'home')
    }, [])

    const openDrawer = () => {
        setIsDrawerOpened(!isDrawerOpened)
        setTimeout(() => {
            setIsDrawerActive(!isDrawerActive)
        }, 1)
    }

    const closeDrawer = () => {
        setIsDrawerActive(!isDrawerActive)
        setTimeout(() => {
            setIsDrawerOpened(!isDrawerOpened)
        }, 200)
    }

    return (
        <div className={'header'}>
            <svg className="clip-path">
                <clipPath id="small-rectangle-clip-path-rtl" clipPathUnits="objectBoundingBox">
                    <path d="M1,0 L0.082,0.475 c-0.12,0.062,-0.085,0.138,0.038,0.183 l0.888,0.342 L1,0" />
                </clipPath>

                <clipPath id="small-rectangle-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M0,0 l0.926,0.475 c0.12,0.062,0.085,0.138,-0.038,0.183 L0,1 L0,0" />
                </clipPath>
            </svg>

            <div className={'big-rectangle'}>
                <img className={'rtl'} src={bigRectangleRTL} alt=""/>
                <img className={'ltr'} src={bigRectangle} alt=""/>
            </div>

            <div className={'small-rectangle home-page'}>
                <div className="clip" style={{ backgroundImage: `url(${smallImage})` }}>
                    <div className="overlay" />
                </div>
            </div>

            <div className={'top-nav'}>
                <div className={'logo-side'} onClick={() => { router.push('/') }}>
                    {isTabletOrMobile && isPortrait? <img src={whiteLogo} alt=""/>:<img src={logo} alt=""/>}
                </div>

                <div className={'menu-side'}>
                    {isTabletOrMobile && isPortrait ?
                        <div onClick={openDrawer} className={'icon-container'}><i className="ion-android-menu" aria-hidden="true" /></div>
                    :
                    <ul className={'menu'}>
                        <li className={'active'}><span>{t('public.menu.home')}</span></li>
                        <li><Link href={'/health_care_professionals'}><span>{t('public.menu.health_care_professionals')}</span></Link></li>
                        <li><Link href={'/for_you_and_your_family'}><span>{t('public.menu.for_you_and_your_family')}</span></Link></li>
                        <li><Link href={'/about_us'}><span>{t('public.menu.about_us')}</span></Link></li>
                        <li><Link href={'/blog'}><span>{t('public.menu.blog')}</span></Link></li>
                    </ul>}
                </div>
            </div>

            <div className={'header-body'} style={{alignItems: 'center'}}>
                <div className={'welcome-message'}>
                    <h1>{t('public.home.header.title')}</h1>

                    <p>{t('public.home.header.description')}</p>

                    <div className={'header-button'}>
                        <div className={'icon-container'}>
                            <i className="ion-play" aria-hidden="true" />
                        </div>

                        <span>{t('public.home.header.button')}</span>
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

            {isDrawerOpened && <div onClick={closeDrawer} className={'drawer-overlay ' + (isDrawerActive?'active':'')}>
                <div className={'drawer'}>
                    <ul className={'menu'}>
                        <li className={activeTab === 'home'? 'active':''}><span>{t('public.menu.home')}</span></li>
                        <li className={activeTab === 'health_care'? 'active':''}><Link href={'/health_care_professionals'}><span>{t('public.menu.health_care_professionals')}</span></Link></li>
                        <li className={activeTab === 'for_you_and_your_family'? 'active':''}><Link href={'/for_you_and_your_family'}><span>{t('public.menu.for_you_and_your_family')}</span></Link></li>
                        <li className={activeTab === 'about_us'? 'active':''}><Link href={'/about_us'}><span>{t('public.menu.about_us')}</span></Link></li>
                        <li className={activeTab === 'blog'? 'active':''}><Link href={'/blog'}><span>{t('public.menu.blog')}</span></Link></li>
                    </ul>

                    <div className={'social-icon-privacy-policy'}>
                        <div className={'social-icons'}>
                            <ul>
                                <li><i className="ion-social-linkedin" aria-hidden="true" /></li>
                                <li><i className="ion-social-twitter" aria-hidden="true" /></li>
                                <li><i className="ion-social-instagram" aria-hidden="true" /></li>
                                <li><i className="ion-social-facebook" aria-hidden="true" /></li>
                                <li><i className="ion-ios-paperplane" aria-hidden="true" /></li>
                            </ul>
                        </div>

                        <div className={'divider'} />

                        <div className={'privacy-policy'}>
                            <span>{t('public.footer.copy_rights')}</span>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )

}

export function StickyHeader(props) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 950px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const [isDrawerOpened, setIsDrawerOpened] = useState(false)
    const [isDrawerActive, setIsDrawerActive] = useState(false)
    const [activeTab, setActiveTab] = useState('')

    const { t } = useTranslation();

    const router = useRouter();

    useEffect(() => {
        let regularExpression = /[^/](\w)*[^/]/;
        setActiveTab(regularExpression.exec(router.pathname) !== null? regularExpression.exec(router.pathname)[0]:'home')
    }, [])

    const openDrawer = () => {
        setIsDrawerOpened(!isDrawerOpened)
        setTimeout(() => {
            setIsDrawerActive(!isDrawerActive)
        }, 1)
    }

    const closeDrawer = () => {
        setIsDrawerActive(!isDrawerActive)
        setTimeout(() => {
            setIsDrawerOpened(!isDrawerOpened)
        }, 200)
    }

    return (
        <div className={'header sticky-header'}>
            <div className={'top-nav'}>
                <div className={'logo-side'} onClick={() => {router.push('/')}}>
                    <img src={logo} alt=""/>
                </div>

                <div className={'menu-side'}>
                    {isTabletOrMobile && isPortrait ?
                        <div onClick={openDrawer} className={'icon-container'}><i className="ion-android-menu" aria-hidden="true"/></div>
                        :
                        <ul className={'menu'}>
                            <li className={activeTab === 'home' ? 'active' : ''}><Link href={'/'}><span>{t('public.menu.home')}</span></Link></li>
                            <li className={activeTab === 'health_care_professionals' ? 'active' : ''}><Link href={'/health_care_professionals'}><span>{t('public.menu.health_care_professionals')}</span></Link></li>
                            <li className={activeTab === 'for_you_and_your_family' ? 'active' : ''}><Link href={'/for_you_and_your_family'}><span>{t('public.menu.for_you_and_your_family')}</span></Link></li>
                            <li className={activeTab === 'about_us' ? 'active' : ''}><Link href={'/about_us'}><span>{t('public.menu.about_us')}</span></Link></li>
                            <li className={activeTab === 'blog' ? 'active' : ''}><Link href={'/blog'}><span>{t('public.menu.blog')}</span></Link></li>
                        </ul>
                    }
                </div>
            </div>

            <div className={'header-body'}>
                <div style={{ background: `url(${backgroundBlog}) no-repeat`, backgroundPosition: 'center center', backgroundSize: 'cover'}} className={'title-breadcrumbs-container'}>
                    <div className={'outer-container'}>
                        <div className={'content-container'}>
                            <div className={'title'}>
                                <h1>{props.title}</h1>
                            </div>

                            <div className={'breadcrumbs'}>
                                <ul>
                                    {props.breadcrumbs.map((item, index) => {
                                        return <li onClick={item.onPress} key={index}><span>{item.title}</span> {props.breadcrumbs.length > (index+1)? <span className={'sep'}>/</span>:<></> }</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isDrawerOpened && <div onClick={closeDrawer} className={'drawer-overlay ' + (isDrawerActive?'active':'')}>
                <div className={'drawer'}>
                    <ul className={'menu'}>
                        <li className={activeTab === 'home'? 'active':''}><Link href={'/'}><span>{t('public.menu.home')}</span></Link></li>
                        <li className={activeTab === 'health_care_professionals'? 'active':''}><Link href={'/health_care_professionals'}><span>{t('public.menu.health_care_professionals')}</span></Link></li>
                        <li className={activeTab === 'for_you_and_your_family'? 'active':''}><Link href={'/for_you_and_your_family'}><span>{t('public.menu.for_you_and_your_family')}</span></Link></li>
                        <li className={activeTab === 'about_us'? 'active':''}><Link href={'/about_us'}><span>{t('public.menu.about_us')}</span></Link></li>
                        <li className={activeTab === 'blog'? 'active':''}><Link href={'/blog'}><span>{t('public.menu.blog')}</span></Link></li>
                    </ul>

                    <div className={'social-icon-privacy-policy'}>
                        <div className={'social-icons'}>
                            <ul>
                                <li><i className="ion-social-linkedin" aria-hidden="true" /></li>
                                <li><i className="ion-social-twitter" aria-hidden="true" /></li>
                                <li><i className="ion-social-instagram" aria-hidden="true" /></li>
                                <li><i className="ion-social-facebook" aria-hidden="true" /></li>
                                <li><i className="ion-ios-paperplane" aria-hidden="true" /></li>
                            </ul>
                        </div>

                        <div className={'divider'} />

                        <div className={'privacy-policy'}>
                            <span>{t('public.footer.copy_rights')}</span>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )

}
