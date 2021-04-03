import './ReviewCard.scss';
import Button from '../Button/Button';

const ReviewCard = ({ review }) => {

    const convertTimestamp = (timestamp) => {
        const newTimestamp = new Date(timestamp);
        const date = newTimestamp.getDate();
        const month = newTimestamp.getMonth() + 1;
        const year = newTimestamp.getFullYear();
        const fullDate = `${date}/${month}/${year}`;
        return fullDate;
    };

    const { name, userImage, timestamp, content, thumbs } = review;

    return (
        <article className='review-card'>
            <img className='review-card__image' src={userImage} alt='user image'/>
            <div className='review-card__wrapper'>
                <div className='review-card__header'>
                    <p className='review-card__name'>{name}</p>
                    <p className='review-card__date'>{convertTimestamp(timestamp)}</p>
                </div>
                <p className='review-card__content'>{content}</p>
                <p className='review-card__thumbs'>{thumbs} people found this helpful</p>
                <div className='review-card__footer'>
                    <Button
                    className='review-card__button'
                    text='Helpful'/>
                </div>
            </div>
        </article>
    );
};

export default ReviewCard;