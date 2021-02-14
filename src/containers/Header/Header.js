import React, {useEffect, useState} from 'react'

// Assets
import leftRectangle from '../../assets/svg/background/left_rectangle.svg'
import rightRectangle from '../../assets/svg/background/right_rectangle.svg'
import logo from '../../assets/svg/logo/vertical_logo_light_theme.png'
import mockup from '../../assets/svg/mobile_moukup.svg'

export default function Header(props) {

    const [launchAt, setLaunchAt] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        setTimeout(() => {
            const   launchDate = new Date('Feb 18, 2021 16:30:00').getTime(),
                    currentData = new Date().getTime();

            let distance = launchDate - currentData;

            setLaunchAt({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }, 1000)
    })

    const renderCounterBox = (type, duration) => {
        return <div className={'counter-box'}>
            <span className={'duration'}>{duration}</span>
            <span className={'type'}>{type}</span>
        </div>
    }

    return (
        <div className={'header'}>
            <div className={'left-rectangle'}>
                <img src={leftRectangle} alt=""/>
            </div>

            {props.isComingSoon && <div className={'right-rectangle'}>
                <img src={rightRectangle} alt=""/>
            </div>}

            <div className={'top-nav'}>
                <div className={'logo-side'}>
                    <img src={logo} alt=""/>
                </div>

                {!props.isComingSoon && <div className={'menu-side'}>

                </div>}
            </div>

            <div className={'header-body'}>
                {props.isComingSoon && <div className={'counter'}>
                    <div className={'stay-toned'}>
                        <h1>ترقبوا انطلاقنا...</h1>
                    </div>

                    <div className={'counter-boxes'}>
                        {renderCounterBox('يوم', launchAt.days)}
                        {renderCounterBox('ساعة', launchAt.hours)}
                        {renderCounterBox('دقيقة', launchAt.minutes)}
                        {renderCounterBox('ثانية', launchAt.seconds)}
                    </div>
                </div>}

                <div className={'mockup'}>
                    <img src={mockup} alt="..."/>
                </div>
            </div>
        </div>
    )

}
