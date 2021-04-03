import './ActivityReviews.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils';
import BackIcon from '../../assets/icons/back.svg';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import Button from '../../components/Button/Button';

function ActivityReviews(props) {
    const [activity, setActivity] = useState({});
    const { activityId } = props.match.params;

    useEffect(() => {
        axios
        .get(`${API_URL}/activities/${activityId}`)
        .then(response => {
            setActivity(response.data);
        });
    }, []);  

    const { category, title, reviews } = activity;

    return (
        <main className={`reviews reviews--category-${category}`}>
            <div className='reviews__header'>
                <img className='reviews__back-icon' src={BackIcon} alt='Back Icon'/>
                <h3 className='reviews__title'>{title}</h3>
            </div>
            <Button
            className='reviews__button'
            text='+ Add to my bucket'/>
            <article className='reviews__card'>
                <h3 className='reviews__heading'>Reviews</h3>
                {reviews && reviews.map(review => 
                    <ReviewCard
                    key={review.id}
                    review={review}/>
                )}
            </article>
        </main>
    );
};

export default ActivityReviews;