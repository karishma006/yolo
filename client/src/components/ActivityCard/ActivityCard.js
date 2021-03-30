import './ActivityCard.scss';

function ActivityCard() {
    return (
        <article className='activity-card'>
            <img className='activity-card__image' src='http://placekitten.com/142/142' alt='title'/>
            <div className='activity-card__right'>
                <h3 className='activity-card__title'>Go skydiving</h3>
                <p className='activity-card__stats'>60% have bucketed this</p>
                <p className='activity-card__stats'>80% have completed this</p>
            </div>
        </article>
    );
};

export default ActivityCard;