import './BucketCard.scss';
import RemoveIconIntelligence from '../../assets/icons/intelligence-remove.svg';
import RemoveIconCreativity from '../../assets/icons/creativity-remove.svg';
import RemoveIconFun from '../../assets/icons/fun-remove.svg';
import RemoveIconAdventure from '../../assets/icons/adventure-remove.svg';
import RemoveIconFitness from '../../assets/icons/fitness-remove.svg';

const removeIcons = {
    'intelligence': RemoveIconIntelligence,
    'creativity': RemoveIconCreativity,
    'fun': RemoveIconFun,
    'adventure': RemoveIconAdventure,
    'fitness': RemoveIconFitness,
};

const BucketCard = ({ activity }) => {
    const { title, image, category, done } = activity;

    return (
        <article className={`bucket-list__card bucket-list__card--category-${category}`}>
            <img className='bucket-list__card__image' src={image} alt={title}/>
            <div className='bucket-list__card__right'> 
                <img src={removeIcons[category]} className='bucket-list__card__icon'/>
                <p className='bucket-list__card__title'>{title}</p>
                <button className={`bucket-list__card__button bucket-list__card__button--category-${category}`}>Mark as Done</button>
            </div>
            
        </article>
    );
};

export default BucketCard;