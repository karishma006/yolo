import { Link } from 'react-router-dom';
import RemoveIconIntelligence from '../../assets/icons/intelligence-remove.svg';
import RemoveIconCreativity from '../../assets/icons/creativity-remove.svg';
import RemoveIconFun from '../../assets/icons/fun-remove.svg';
import RemoveIconAdventure from '../../assets/icons/adventure-remove.svg';
import RemoveIconFitness from '../../assets/icons/fitness-remove.svg';
import './BucketCard.scss';

const removeIcons = {
    'intelligence': RemoveIconIntelligence,
    'creativity': RemoveIconCreativity,
    'fun': RemoveIconFun,
    'adventure': RemoveIconAdventure,
    'fitness': RemoveIconFitness,
};

const BucketCard = ({ activity, handleDelete, handleDone }) => {
    const { id, title, image, category, done, activityId } = activity;

    return (
        <article className={`${done ? `bucket-list__card__done-${category}` : ''} bucket-list__card bucket-list__card--category-${category}`}>
            <img className='bucket-list__card__image' src={image} alt={title}/>
            <div className='bucket-list__card__right'> 
                {!done && <button className='bucket-list__card__link' onClick={(event) => handleDelete(event, id)}>
                    <img src={removeIcons[category]} className='bucket-list__card__icon'/>
                </button>}
                <p className={`${done ? 'bucket-list__card__title--done' : 'bucket-list__card__title'}`}>{title}</p>
                {done ? 
                <>
                <p className='bucket-list__card__status'>Done!</p>
                <Link to={`/activities/${activityId}/reviews`} className='bucket-list__card__review'>Leave a Review</Link> </>: 
                <button className={`bucket-list__card__button bucket-list__card__button--category-${category}`} onClick={(event) => handleDone(event, id)}>Mark as Done</button>}
            </div>
        </article>
    );
};

export default BucketCard;