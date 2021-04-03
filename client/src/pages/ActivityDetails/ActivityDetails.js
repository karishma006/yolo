import './ActivityDetails.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils';
import BackIcon from '../../assets/icons/back.svg';
import DownIcon from '../../assets/icons/down.svg';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const ActivityDetails = (props) => {
    const [activity, setActivity] = useState({});
    const { activityId } = props.match.params;

    useEffect(() => {
        axios
        .get(`${API_URL}/activities/${activityId}`)
        .then(response => {
            setActivity(response.data);
        });
    }, []);    

    const { id, category, title, description, knowMore, reviews } = activity;

    if (activity === {}) {
        return <div>Loading...</div>
    };

    return (
        <main className={`activity activity--category-${category}`}>
            <img className='activity__back-icon' src={BackIcon} alt='Back Icon'/>
            <article className='activity__card'>
                <h3 className='activity__card__title'>{title}</h3>
                <p className='activity__card__description'>{description}</p>
                <a href={knowMore} target='_blank' className='activity__card__link'>Know more</a>
                <Button
                className='activity__card__button'
                text='+ Add to my bucket'/>           
            </article>
            <div className='activity__wrapper'>
                <p className='activity__text'>See what people are saying</p>
                <Link key={id} to={`/activities/${id}/reviews`}>
                    <img className='activity__down-icon' src={DownIcon} alt='Back Icon'/>
                </Link>
            </div>
        </main>
    );
};

export default ActivityDetails;