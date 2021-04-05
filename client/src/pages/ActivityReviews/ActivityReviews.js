import './ActivityReviews.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { API_URL } from '../../utils';
import BackIcon from '../../assets/icons/back.svg';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import Button from '../../components/Button/Button';
import AddReviewForm from '../../components/AddReviewForm/AddReviewForm';

const ActivityReviews = (props) => {
    const [activity, setActivity] = useState({});
    const { activityId } = props.match.params;

    useEffect(() => {
        axios
        .get(`${API_URL}/activities/${activityId}`)
        .then(response => {
            setActivity(response.data);
        });
    }, []);  

    const { id, category, title, reviews } = activity;
    const history = useHistory();

    const addToBucket = (event) => {
        event.preventDefault();

        const userActivity = {
            activityId: id,
            category: category,
            title: title,
        };

        axios
        .post(`${API_URL}/mybucket/activities`, userActivity)
        .then(response => {
            console.log(response);
        });
    };

    return (
        <main className={`reviews reviews--category-${category}`}>
            <div className='reviews__header'>
                <Link onClick={() => history.goBack()} className='reviews__back-icon'>
                    <img src={BackIcon} alt='Back Icon'/>
                </Link>
                <h3 className='reviews__title'>{title}</h3>
            </div>
            <article className='reviews__card'>
                <Button
                className='reviews__card__button'
                text='+ Add to my bucket'
                onClick={addToBucket}/>
                <AddReviewForm
                category={category}/>
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