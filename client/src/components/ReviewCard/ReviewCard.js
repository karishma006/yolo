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
        <article className='review__card'>
            <img className='review__card__image' src={userImage} alt='user image'/>
            <div className='review__card__wrapper'>
                <div className='review__card__header'>
                    <p className='review__card__name'>{name}</p>
                    <p className='review__card__date'>{convertTimestamp(timestamp)}</p>
                </div>
                <p className='review__card__content'>{content}</p>
                <p className='review__card__thumbs'>{thumbs} people found this helpful</p>
                <div className='review__card__footer'>
                    <Button
                    className='review__card__button'
                    text='Helpful'/>
                </div>
            </div>
        </article>
    );
};

export default ReviewCard;