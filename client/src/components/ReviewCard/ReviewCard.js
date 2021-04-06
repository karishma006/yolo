import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import Button from '../Button/Button';
import { categoryColors } from '../../utils';
import './ReviewCard.scss';

const ReviewCard = ({ review, category }) => {

    const [thumbs, setThumbs] = useState(review.thumbs);
    const [markedHelpful, setMarkedHelpful] = useState(false);

    const convertTimestamp = (timestamp) => {
        const newTimestamp = new Date(timestamp);
        const date = newTimestamp.getDate();
        const month = newTimestamp.getMonth() + 1;
        const year = newTimestamp.getFullYear();
        const fullDate = `${date}/${month}/${year}`;
        return fullDate;
    };

    const addThumbs = (event) => {
        event.preventDefault();
        setThumbs(review.thumbs+1);
        setMarkedHelpful(true);
    };

    const { name, userImage, timestamp, rating, content } = review;

    return (
        <article className='review__card'>
            <img className='review__card__image' src={userImage} alt='user'/>
            <div className='review__card__wrapper'>
                <div className='review__card__header'>
                    <p className='review__card__name'>{name}</p>
                    <p className='review__card__date'>{convertTimestamp(timestamp)}</p>
                </div>
                <ReactStars
                count={5}
                size={20}
                value={parseInt(rating)}
                char="&hearts;"
                color='#F3DAC3'
                activeColor={categoryColors[category]}
                edit={false}/>
                <p className='review__card__content'>{content}</p>
                <p className='review__card__thumbs'>{thumbs} people found this helpful</p>
                <div className='review__card__footer'>
                {markedHelpful ? 
                    <p className='review__card__marked'>Marked as Helpful</p> : 
                    <Button
                    className='review__card__button'
                    text='Helpful'
                    onClick={addThumbs}/>}
                </div>
            </div>
        </article>
    );
};

export default ReviewCard;