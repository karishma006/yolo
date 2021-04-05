import './ActivityCard.scss';
import ReactStars from 'react-stars';

const categories = {
    'intelligence': '#347DA2',
    'creativity': '#644C8A',
    'fun': '#C44978',
    'adventure': '#389E95',
    'fitness': '#DC5349',
};

const ActivityCard = ({ activity }) => {
    const { category, image, title, rating, bucketed, completed } = activity;

    return (
        <article className={`activity-nav__card activity-nav__card--category-${category}`}>   
            <img className='activity-nav__card__image' src={image} alt={title}/>
            <div className='activity-nav__card__right'>
                <p className='activity-nav__card__title'>{title}</p>
                <ReactStars
                count={5}
                size='20'
                value={rating}
                char="&hearts;"
                color1='#F3DAC3'
                color2={categories[category]}/>
                <div className='activity-nav__card__wrapper'>
                    <p className='activity-nav__card__stats'>{bucketed}</p>
                    <p className='activity-nav__card__stats activity-nav__card__stats--text'>have bucketed this</p>
                </div>
                <div className='activity-nav__card__wrapper'>
                    <p className='activity-nav__card__stats'>{completed}</p>
                    <p className='activity-nav__card__stats activity-nav__card__stats--text'>have bucketed this</p>
                </div>
            </div>
        </article>
    ); 
};

export default ActivityCard;