import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils';
import BackIcon from '../../assets/icons/back.svg';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import Button from '../../components/Button/Button';
import AddReviewForm from '../../components/AddReviewForm/AddReviewForm';
import './ActivityReviews.scss';

const ActivityReviews = (props) => {
    const [activity, setActivity] = useState({});
    const [addedToBucket, setAddedToBucket] = useState(false);
    const { activityId } = props.match.params;

    useEffect(() => {
        axios
        .get(`${API_URL}/activities/${activityId}`)
        .then(response => {
            setActivity(response.data);
        });
    }, [activityId]);  

    const { id, category, title, image, reviews } = activity;
    const history = useHistory();

    const addToBucket = (event) => {
        event.preventDefault();

        const userActivity = {
            activityId: id,
            category: category,
            title: title,
            image: image,
            reviews: reviews,
        };

        axios
        .post(`${API_URL}/mybucket/activities`, userActivity)
        .then(_response => {
            setAddedToBucket(true);
        });
    };

    const addReview = (event) => {
        event.preventDefault();
        const newReview = {
            rating: event.target.elements.rating.value,
            content: event.target.elements.content.value,
        };

        axios
        .post(`${API_URL}/activities/${id}/reviews`, newReview)
        .then(response => {
            setActivity(response.data);
        });
        event.target.reset();
    };

    return (
        <main className={`reviews reviews--category-${category}`}>
            <div className='reviews__header'>
                <button onClick={() => history.goBack()} className='reviews__back-icon'>
                    <img src={BackIcon} alt='Back Icon'/>
                </button>
                <h3 className='reviews__title'>{title}</h3>
            </div>
            <article className='reviews__card'>
            {addedToBucket ? 
                <Link to='/mybucket' className='reviews__card__route'>View in Bucket</Link> : 
                <Button
                className='reviews__card__button'
                text='+ Add to my bucket'
                onClick={addToBucket}/>}
                <AddReviewForm
                category={category}
                addReview={addReview}/>
                <h3 className='reviews__card__heading'>Reviews</h3>
                {reviews && reviews.map(review => 
                    <ReviewCard
                    key={review.id}
                    review={review}
                    category={category}/>
                )}
            </article>
        </main>
    );
};

export default ActivityReviews;