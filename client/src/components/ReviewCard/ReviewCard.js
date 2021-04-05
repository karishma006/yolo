import './ReviewCard.scss';
import Button from '../Button/Button';
import ReactStars from 'react-stars';

const categories = {
    'intelligence': '#347DA2',
    'creativity': '#644C8A',
    'fun': '#C44978',
    'adventure': '#389E95',
    'fitness': '#DC5349',
};

const ReviewCard = ({ review, category }) => {

    const convertTimestamp = (timestamp) => {
        const newTimestamp = new Date(timestamp);
        const date = newTimestamp.getDate();
        const month = newTimestamp.getMonth() + 1;
        const year = newTimestamp.getFullYear();
        const fullDate = `${date}/${month}/${year}`;
        return fullDate;
    };

    const { name, userImage, timestamp, rating, content, thumbs } = review;

    return (
        <article className='review__card'>
            <img className='review__card__image' src={userImage} alt='user image'/>
            <div className='review__card__wrapper'>
                <div className='review__card__header'>
                    <p className='review__card__name'>{name}</p>
                    <p className='review__card__date'>{convertTimestamp(timestamp)}</p>
                </div>
                <ReactStars
                count={5}
                value={rating}
                char="&hearts;"
                color1='#F3DAC3'
                color2={categories[category]}/>
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