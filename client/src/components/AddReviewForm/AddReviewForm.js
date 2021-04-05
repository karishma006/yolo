import './AddReviewForm.scss';
import Rating from 'react-rating';
import UserImage from '../../assets/images/user-0.jpg';
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
import Button from '../../components/Button/Button';

const ratingIcons = {
    'intelligence': { empty: IntelligenceEmptyRatingIcon, full: IntelligenceFullRatingIcon },
    'creativity': { empty: CreativityEmptyRatingIcon, full: CreativityFullRatingIcon },
    'fun': { empty: FunEmptyRatingIcon, full: FunFullRatingIcon },
    'adventure': { empty: AdventureEmptyRatingIcon, full: AdventureFullRatingIcon },
    'fitness': { empty: FitnessEmptyRatingIcon, full: FitnessFullRatingIcon },
};

const AddReviewForm = ({ category }) => {
    console.log(category);
    return (
        <section className='add-review'>
            <h3 className='add-review__heading'>Leave a Review</h3>
            <form className='add-review__form'>
                <img src={UserImage} className='add-review__form__image' alt='user-image'/>
                <div className='add-review__form__container'>
                    <div className='add-review__form__wrapper'>
                        <label className='add-review__form__label'>Rate the activity</label>
                        {category && <Rating
                        placeholderRating={0}
                        emptySymbol={<img src={ratingIcons[category]['empty']}/>}
                        placeholderSymbol={<img src={ratingIcons[category]['full']}/>}/>}
                    </div>
                    <div className='add-review__form__wrapper'>
                        <label className='add-review__form__label'>Review the activity</label>
                        <input className='add-review__form__input' name='review' type='text'/>
                    </div>
                    <Button
                    className='add-review__form__button'
                    text='Post'/>
                </div>
            </form>
        </section>
    );
};

export default AddReviewForm;