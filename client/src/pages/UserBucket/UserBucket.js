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
        userActivities: [],
        progress: {
            'intelligence': { total: 0, done: 0, percentage: 0 },
            'creativity': { total: 0, done: 0, percentage: 0 },
            'fun': { total: 0, done: 0, percentage: 0 },
            'adventure': { total: 0, done: 0, percentage: 0 },
            'fitness': { total: 0, done: 0, percentage: 0 },
        }
    };

    componentDidMount() {
        axios
        .get(`${API_URL}/mybucket/activities`)
        .then(response => {
            this.setState({
                userActivities: response.data,
            });
        });
    };

    deleteActivity = (id) => {
        const newUserActivities = JSON.parse(JSON.stringify(this.state.userActivities));
        const deleteIndex = newUserActivities.findIndex(userActivity => userActivity.id === id);
        newUserActivities.splice(deleteIndex, 1);

        return newUserActivities;
    };

    handleDelete = (event, id) => {
        event.preventDefault();

        axios
        .delete(`${API_URL}/mybucket/activities/${id}`)
        .then(response => {
            console.log(response);
            const updatedUserActivities = this.deleteActivity(id);

            this.setState({
                userActivities: updatedUserActivities,
            });
        });

        console.log(id);
    };

    markDoneActivity = (id) => {
        const newUserActivities = JSON.parse(JSON.stringify(this.state.userActivities));
        const doneActivity = newUserActivities.find(userActivity => userActivity.id === id);
        doneActivity.done = true;
        return newUserActivities;
    }; 

    handleDone = (event, id) => {
        event.preventDefault();

        axios
        .put(`${API_URL}/mybucket/activities/${id}`)
        .then(response => {
            console.log(response);
            const newUserActivities = this.markDoneActivity(id);

            this.setState({
                userActivities: newUserActivities,
            });
        });
    };

    handleChallenge = (event) => {
        event.preventDefault();

        axios
        .get(`${API_URL}/mybucket/activities/random`)
        .then(response => {
            console.log(response)
            this.props.history.push(`/activities/${response.data.id}`);
        });
    };

    render() {
        if (this.state.userActivities === []) {
            return <div>Loading...</div>
        };

        const { userActivities } = this.state;
        console.log(userActivities);

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
                text='CHALLENGE ME!'
                onClick={this.handleChallenge}/>
                <section className='bucket-list'>
                    <header className='bucket-list__header'>
                        <p className='bucket-list__heading'>My Bucket</p>
                        <img className='bucket-list__icon' src={AddIcon} alt='plus-icon'/>
                    </header>
                    <ul className='bucket-list__list'>
                    {userActivities.map(activity => (
                        <li 
                        key={activity.id} 
                        className='bucket-list__item'>
                            <BucketCard
                            activity={activity}
                            handleDelete={this.handleDelete}
                            handleDone={this.handleDone}/>
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