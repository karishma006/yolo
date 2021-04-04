import './AddReview.scss';

import UserImage from '../../assets/images/user-0.jpg';

const AddReview = () => {
    return (
        <section className='add-review'>
            <form className='add-review__form'>
                <img src={UserImage} className='add-review__form__image' alt='user-image'/>
                <div className='add-review__form__wrapper'>
                    <label className='add-review__form__label'>Rate the activity

                    </label>
                </div>
            </form>
        </section>
    );
};

export default AddReview;