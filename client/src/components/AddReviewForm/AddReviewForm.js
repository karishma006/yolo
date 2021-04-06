import './AddReviewForm.scss';
import Rating from 'react-rating';
import UserImage from '../../assets/images/user-0.jpg';
import Button from '../../components/Button/Button';
import ReactStars from 'react-stars';
import { useState, useEffect } from 'react';

const categories = {
    'intelligence': '#347DA2',
    'creativity': '#644C8A',
    'fun': '#C44978',
    'adventure': '#389E95',
    'fitness': '#DC5349',
};

const AddReviewForm = ({ category, addReview }) => {
    const [rating, setRating] = useState(0);

    const ratingChanged = (newRating) => {
        setRating(newRating);
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
                        count={5}
                        size='20'
                        char="&hearts;"
                        color1='#F3DAC3'
                        color2={categories[category]}
                        onChange={ratingChanged}/>}
                    </div>
                    <div className='add-review__form__wrapper'>
                        <label className='add-review__form__label'>Review the activity</label>
                        <input className='add-review__form__input' name='content' type='text'/>
                    </div>
                    <Button
                    className='add-review__form__button'
                    text='Post'/>
                </div>
                <input hidden type='integer' min='0' max='5' name='rating' value={rating}/>
            </form>
        </section>
    );
};

export default AddReviewForm;