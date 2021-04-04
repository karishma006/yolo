import { Component } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import UserImage from '../../assets/images/user-0.jpg';
import AddIcon from '../../assets/icons/add.svg';
import { API_URL } from '../../utils';
import { categories } from '../../utils';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import Button from '../../components/Button/Button';
import BucketCard from '../../components/BucketCard/BucketCard';
import './UserBucket.scss';

class UserBucket extends Component {
    state = {
        activities: [],
    };

    componentDidMount() {
        axios
        .get(`${API_URL}/mybucket`)
        .then(response => {
            this.setState({
                activities: response.data,
            });
        });
    };

    render() {
        if (this.state.activities === []) {
            return <div>Loading...</div>
        };

        const { activities } = this.state;
        console.log(activities);

        return (
            <>
            <Header/>
            <main className='profile'>
                <img src={UserImage} alt='user-image' className='profile__image'/>
                <ul className='bucket-list__categories'>
                    {categories.map((category, i) => (
                        <li key={i} className='bucket-list__category-bar'>
                            <CategoryBar
                            category={category}/>
                        </li>
                    ))}
                </ul>
                <Button
                className='bucket-list__button'
                text='CHALLENGE ME!'/>
                <section className='bucket-list'>
                    <header className='bucket-list__header'>
                        <p className='bucket-list__heading'>My Bucket</p>
                        <img className='bucket-list__icon' src={AddIcon} alt='plus-icon'/>
                    </header>
                    <ul className='bucket-list__list'>
                    {activities.map(activity => (
                        <li 
                        key={activity.id} 
                        className='bucket-list__item'>
                            <BucketCard
                            activity={activity}/>
                        </li>
                    ))}
                </ul>
                </section>
            </main>
            </>
        );
    };
};

export default UserBucket;