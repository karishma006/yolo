import './AddReview.scss';
import Rating from 'react-rating';
import UserImage from '../../assets/images/user-0.jpg';

const AddReview = () => {
    return (
        <section className='add-review'>
            <form className='add-review__form'>
                <img src={UserImage} className='add-review__form__image' alt='user-image'/>
                <div className='add-review__form__wrapper'>
                    <label className='add-review__form__label'>Rate the activity
                        <Rating
                        placeholderRating={rating}
                        emptySymbol={<img src={ratingIcons[category]['empty']}/>}
                        placeholderSymbol={<img src={ratingIcons[category]['full']}/>}/>
                    </label>
                </div>
            </form>
        </section>
    );
};

export default AddReview;