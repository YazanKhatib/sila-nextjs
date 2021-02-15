// React Basic

// Assets
import partner_1 from '../../assets/images/partners/partnar_1.png'

// Components

export default function Partners() {

    return (
        <section className={'partners-section'}>
            <div className={'section-title'}>
                <h1 className={'without-margin'}>شركاؤنا</h1>
                <p>نحن متحمسون دائماً لتوسيع أعمالنا مع المزيد من الشركاء العظماء</p>
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
