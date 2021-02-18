// React Basic
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";

// Assets
import leftRectangle from '../../assets/svg/background/left_rectangle.svg'
import rightRectangle from '../../assets/svg/background/right_rectangle.svg'
// import rightRectangleHome from '../../assets/svg/background/right_rectangle_home.svg'
import right_image from '../../assets/images/background/home_right.jpg'
import logo from '../../assets/svg/logo/vertical_logo_light_theme.png'
import mockup from '../../assets/svg/mobile_moukup.svg'
import play from '../../assets/svg/play.svg'
import market_2 from "../../assets/images/markets/market_2.png";
import market_1 from "../../assets/images/markets/market_1.png";
import background_blog from '../../assets/images/background/background_blog.jpg'

export function Header(props) {

    const [launchAt, setLaunchAt] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    // useEffect(() => {
    //     setTimeout(() => {
    //         const   launchDate = new Date('Feb 18, 2021 16:30:00').getTime(),
    //                 currentData = new Date().getTime();
    //
    //         let distance = launchDate - currentData;
    //
    //         setLaunchAt({
    //             days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    //             hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    //             minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    //             seconds: Math.floor((distance % (1000 * 60)) / 1000),
    //         })
    //     }, 1000)
    // })

    const renderCounterBox = (type, duration) => {
        return <div className={'counter-box'}>
            <span className={'duration'}>{duration}</span>
            <span className={'type'}>{type}</span>
        </div>
    }

    return (
        <div className={'header'} style={!props.isComingSoon? {marginBottom: 50}:{}}>
            <div className={'left-rectangle'}>
                <img src={leftRectangle} alt=""/>
            </div>

            <svg className="clip-path">
                <clipPath id="right-rectangle-clip-path" clipPathUnits="objectBoundingBox">
                    <path d="M1,0 l-0.945,0.488 c-0.076,0.043,-0.078,0.114,0.027,0.16 l0.918,0.352 V0"></path>
                </clipPath>
            </svg>

            {props.isComingSoon? <div className={'right-rectangle'}>
                <img src={rightRectangle} alt=""/>
            </div> : <div className={'right-rectangle home-page'}>
                <div className="clip" style={{ backgroundImage: `url(${right_image})` }}>
                    <div className="overlay" />
                </div>
            </div>}

            <div className={'top-nav'}>
                <div className={'logo-side'} onClick={() => {router.push('/')}}>
                    <img src={logo} alt=""/>
                </div>

                {!props.isComingSoon && <div className={'menu-side'}>
                    <ul className={'menu'}>
                        <li className={'active'}><span>الصفحة الرئيسية</span></li>
                        <li><Link href={'/health_care_professionals'}><span>متخصصي الرعاية</span></Link></li>
                        <li><Link href={'/for_you_and_your_family'}><span>لك ولعائلتك</span></Link></li>
                        <li><Link href={'/about_us'}><span>تعرف علينا</span></Link></li>
                        <li><Link href={'/blog'}><span>الأخبار</span></Link></li>

                    </ul>
                </div>}
            </div>

            <div className={'header-body'} style={!props.isComingSoon? {alignItems: 'center'}:{}}>
                {props.isComingSoon? <div className={'counter'}>
                    <div className={'stay-toned'}>
                        <h1>ترقبوا انطلاقنا...</h1>
                    </div>

                    <div className={'counter-boxes'}>
                        {renderCounterBox('يوم', launchAt.days)}
                        {renderCounterBox('ساعة', launchAt.hours)}
                        {renderCounterBox('دقيقة', launchAt.minutes)}
                        {renderCounterBox('ثانية', launchAt.seconds)}
                    </div>
                </div> : <div className={'welcome-message'}>
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

                </div>}

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

    const router = useRouter();

    return (
        <div className={'header sticky-header'}>
            <div className={'top-nav'}>
                <div className={'logo-side'} onClick={() => {router.push('/')}}>
                    <img src={logo} alt=""/>
                </div>

                <div className={'menu-side'}>
                    <ul className={'menu'}>
                        <li><Link href={'/'}><span>الصفحة الرئيسية</span></Link></li>
                        <li className={props.activeItem == 'health_care'? 'active':''}><Link href={'/health_care_professionals'}><span>متخصصي الرعاية</span></Link></li>
                        <li className={props.activeItem == 'for_you_and_your_family'? 'active':''}><Link href={'/for_you_and_your_family'}><span>لك ولعائلتك</span></Link></li>
                        <li className={props.activeItem == 'about_us'? 'active':''}><Link href={'/about_us'}><span>تعرف علينا</span></Link></li>
                        <li className={props.activeItem == 'blog'? 'active':''}><Link href={'/blog'}><span>الأخبار</span></Link></li>
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
