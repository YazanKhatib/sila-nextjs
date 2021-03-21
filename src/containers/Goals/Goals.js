// React Basic

// Assets
import goal_1 from "../../assets/svg/goals/goal_1.svg";

// Components
import Button from "../../components/Button/Button";

// Lang
import { useTranslation } from 'react-i18next';

export default function Goals() {

    const { t } = useTranslation();

    const renderGoalItem = (title, description) => {
        return <div className={'goal-item'}>
            <div className={'icon-container'}>
                <img src={goal_1} alt=""/>
            </div>

            <div className={'item-content'}>
                <h1>{title}</h1>
                <h3>{description}</h3>
            </div>

            <div className={'sliding-div'} />
        </div>
    }

    return (
        <section className={'features-section'}>
            <div className={'section-title'}>
                <h1 style={{ marginBottom: 56 }}>{t('public.home.goals.title')}</h1>
            </div>

            <div className={'section-content'}>
                <div className={'goals'}>
                    {renderGoalItem(t('public.home.goals.items.1.title'), t('public.home.goals.items.1.description'))}
                    {renderGoalItem(t('public.home.goals.items.2.title'), t('public.home.goals.items.2.description'))}
                    {renderGoalItem(t('public.home.goals.items.3.title'), t('public.home.goals.items.3.description'))}
                    {renderGoalItem(t('public.home.goals.items.4.title'), t('public.home.goals.items.4.description'))}
                </div>

                <div className={'more-items-button-container'}>
                    <Button title={t('public.button.primary_title_1')} blueButtonTitle={t('public.button.secondary_title_1')} style={{width: 200}}/>
                </div>
            </div>
        </section>
    )

}
