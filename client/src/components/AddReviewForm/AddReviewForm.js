import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import UserImage from '../../assets/images/user-0.jpg';
import Button from '../../components/Button/Button';
import './AddReviewForm.scss';

const categories = {
    'intelligence': '#347DA2',
    'creativity': '#644C8A',
    'fun': '#C44978',
    'adventure': '#389E95',
    'fitness': '#DC5349',
};

const AddReviewForm = ({ category, addReview }) => {
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');

    const ratingChanged = (newRating) => {
        setRating(newRating);
    }

    const contentChanged = (event) => {
        setContent(event.target.value);
    }

    const isFormValid = () => {
        if ((rating > 0 && rating <= 5) || content !== '' ) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <section className='add-review'>
            <h3 className='add-review__heading'>Leave a Review</h3>
            <form className='add-review__form' onSubmit={addReview}>
                <img src={UserImage} className='add-review__form__image' alt='user-image'/>
                <div className='add-review__form__container'>
                    <div className='add-review__form__wrapper'>
                        <label className='add-review__form__label'>Rate the activity</label>
                        {category && <ReactStars
                        classNames='add-review__form__rating'
                        count={5}
                        size={20}
                        char="&hearts;"
                        color='#F3DAC3'
                        activeColor={categories[category]}
                        onChange={ratingChanged}/>}
                    </div>
                    <div className='add-review__form__wrapper'>
                        <label className='add-review__form__label'>Review the activity</label>
                        <input className='add-review__form__input' name='content' type='text' onChange={contentChanged}/>
                    </div>
                    <Button
                    className='add-review__form__button'
                    text='Post'
                    disabled={!isFormValid()}/>
                </div>
                <input hidden type='integer' min='0' max='5' name='rating' value={parseInt(rating)} onChange={() => {}}/>
            </form>
        </section>
    );
};

export default AddReviewForm;