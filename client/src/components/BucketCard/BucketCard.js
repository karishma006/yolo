import './BucketCard.scss';

const BucketCard = ({ activity }) => {
    const { title, image, category, done } = activity;

    return (
        <article className={`bucket-list__card bucket-list__card--category-${category}`}>
            <img className='bucket-list__card__image' src={image} alt={title}/>
            <div className='bucket-list__card__right'>
                <p className='bucket-list__card__title'>{title}</p>
                <button className='bucket-list__card__button'>Mark as Done</button>
            </div>
        </article>
    );
};

export default BucketCard;