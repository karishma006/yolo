import './ActivityCard.scss';
import IntelligenceEmptyRatingIcon from '../../assets/icons/intelligence-rating-empty.svg';
import IntelligenceFullRatingIcon from '../../assets/icons/intelligence-rating-full.svg';
import CreativityEmptyRatingIcon from '../../assets/icons/creativity-rating-empty.svg';
import CreativityFullRatingIcon from '../../assets/icons/creativity-rating-full.svg';
import FunEmptyRatingIcon from '../../assets/icons/fun-rating-empty.svg';
import FunFullRatingIcon from '../../assets/icons/fun-rating-full.svg';
import AdventureEmptyRatingIcon from '../../assets/icons/adventure-rating-empty.svg';
import AdventureFullRatingIcon from '../../assets/icons/adventure-rating-full.svg';
import FitnessEmptyRatingIcon from '../../assets/icons/fitness-rating-empty.svg';
import FitnessFullRatingIcon from '../../assets/icons/fitness-rating-full.svg';
import Rating from 'react-rating';

const ratingIcons = {
    'intelligence': { empty: IntelligenceEmptyRatingIcon, full: IntelligenceFullRatingIcon },
    'creativity': { empty: CreativityEmptyRatingIcon, full: CreativityFullRatingIcon },
    'fun': { empty: FunEmptyRatingIcon, full: FunFullRatingIcon },
    'adventure': { empty: AdventureEmptyRatingIcon, full: AdventureFullRatingIcon },
    'fitness': { empty: FitnessEmptyRatingIcon, full: FitnessFullRatingIcon },
};

const ActivityCard = ({ activity }) => {
    const { category, image, title, rating, bucketed, completed } = activity;

    return (
        <article className={`activity-nav__card activity-nav__card--category-${category}`}>   
            <img className='activity-nav__card__image' src={image} alt={title}/>
            <div className='activity-nav__card__right'>
                <p className='activity-nav__card__title'>{title}</p>
                <Rating
                placeholderRating={rating}
                emptySymbol={<img src={ratingIcons[category]['empty']}/>}
                placeholderSymbol={<img src={ratingIcons[category]['full']}/>}/>
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