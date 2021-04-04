import './ReviewCard.scss';
import Button from '../Button/Button';
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
                <Rating
                placeholderRating={rating}
                emptySymbol={<img src={ratingIcons[category]['empty']}/>}
                placeholderSymbol={<img src={ratingIcons[category]['full']}/>}/>
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