// React Basic
import { useRouter } from 'next/router'

// Assets
import logo_white_theme from "../../assets/svg/logo/vertical_logo_dark_theme.png";
import market_1 from "../../assets/images/markets/market_1.png";
import market_2 from "../../assets/images/markets/market_2.png";

// Components

export default function Footer() {

    const router = useRouter();

    return (
        <footer>
            <div className={'top-side'}>
                <div className={'logo-side'}>
                    <img src={logo_white_theme} alt="" onClick={() => {router.push('/')}}/>
                    <p>صلة اتجاه جديد في الرعاية الصحية لك ولعائلتك
                        كن على ثقة بنا وحمل تطبيق صلة الان</p>
                    <div className={'markets'}>
                        <img src={market_2} alt=""/>
                        <img src={market_1} alt=""/>
                    </div>
                </div>

                <div className={'contact-info-side'}>
                    <div className={'content'}>
                        <h5 className={'content-title'}>معلومات التواصل</h5>

                        <div className={'contact-info'}>
                            <ul>
                                <li><div className={'icon-container'}><i className="ion-android-call" aria-hidden="true" /></div><span>+963-997-798-554</span></li>
                                <li><div className={'icon-container'}><i className="ion-android-mail" aria-hidden="true" /></div><span>info@sila.com</span></li>
                                <li><div className={'icon-container'}><i className="ion-location" aria-hidden="true" /></div><span>سوريا - دمشق - المزرعة شارع أسامة بن زيد</span></li>
                            </ul>
                        </div>

                        <div className={'stay-toned'}>
                            <h5>ابقى على اطلاع</h5>

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
                    <h5>تواصل معنا</h5>

                    <form action="">
                        <input type="text" name={'email'} id={'email'} placeholder={'البريد الالكتروني'}/>
                        <textarea name="message" id="message" rows="4" placeholder={'اترك لنا تعليقك'}></textarea>
                        <button onClick={(e) => { e.preventDefault() }}>إرسال</button>
                    </form>
                </div>
            </div>

            <div className={'bottom-side'}>
                <div className={'copy-right'}>
                    <span>جميع الحقوق محفوظة لشبكة صلة الطبية 2021</span>
                </div>

                <div className={'lang-privacy-common-questions'}>
                    <span>الأسئلة الشائعة</span>
                    <span>سياسة الخصوصية</span>
                    <span>العربية</span>
                </div>
            </div>
        </footer>
    )

}
