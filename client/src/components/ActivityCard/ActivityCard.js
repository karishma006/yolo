import './ActivityCard.scss';

function ActivityCard({ activity }) {
    const { category, image, title, rating, bucketed, completed } = activity;

    return (
        <article className={category==='intelligence' ? 'activity-nav__card activity-nav__card--category-1' : category==='fitness' ? 'activity-nav__card activity-nav__card--category-2' : category==='fun' ? 'activity-nav__card activity-nav__card--category-3' : category==='adventure' ? 'activity-nav__card activity-nav__card--category-4' : category==='creativity' ? 'activity-nav__card activity-nav__card--category-5' : 'activity-nav__card'}>   
            <img className='activity-nav__card__image' src={image} alt={title}/>
            <div className='activity-nav__card__right'>
                <p className='activity-nav__card__title'>{title}</p>
                <div className='activity-nav__card__wrapper'>
                    <p className='activity-nav__card__stats'>{bucketed}</p><p className='activity-nav__card__stats activity-nav__card__stats--text'>have bucketed this</p>
                </div>
                <div className='activity-nav__card__wrapper'>
                    <p className='activity-nav__card__stats'>{completed}</p><p className='activity-nav__card__stats activity-nav__card__stats--text'>have bucketed this</p>
                </div>
            </div>
        </article>
    ); 
};

export default ActivityCard;