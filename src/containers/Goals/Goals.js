// React Basic

// Assets
import goal_1 from "../../assets/svg/goals/goal_1.svg";

// Components
import Button from "../../components/Button/Button";

export default function Goals() {

    const renderGoalItem = (title, description) => {
        return <div className={'col-lg-3'}>
            <div className={'goal-item'}>
                <div className={'icon-container'}>
                    <img src={goal_1} alt=""/>
                </div>

                <div className={'item-content'}>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                </div>

                <div className={'sliding-div'} />
            </div>
        </div>
    }

    return (
        <section className={'features-section'}>
            <div className={'section-title'}>
                <h1>أهدافنا</h1>
            </div>

            <div className={'section-content'}>
                <div className={'goals'}>
                    <div className={'row'}>
                        {renderGoalItem('مجتمع طبي', 'إنشاء أول شبكة طبية الكترونية في سورية')}
                        {renderGoalItem('مواكبة التطورات', 'تسهيل الخدمات الطبية في سورية')}
                        {renderGoalItem('الرعاية', 'تقديم الرعاية الطبية المتكاملة وتأمين كافة الادوية في سوريا')}
                        {renderGoalItem('الشمولية', 'نسعى ليكون تطبيق صلة الطبي الأشمل على النطاق سوريا')}
                    </div>
                </div>

                <div className={'more-items-button-container'}>
                    <Button title={'استكشف ميزاتك الآن'} blueButtonTitle={'المزيد من الميزات'} style={{width: 200}}/>
                </div>
            </div>
        </section>
    )

}
