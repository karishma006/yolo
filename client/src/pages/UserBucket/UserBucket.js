import { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import UserImage from '../../assets/images/user-0.jpg';
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
            intelligence: { total: 0, done: 0, percentage: 0 },
            creativity: { total: 0, done: 0, percentage: 0 },
            fun: { total: 0, done: 0, percentage: 0 },
            adventure: { total: 0, done: 0, percentage: 0 },
            fitness: { total: 0, done: 0, percentage: 0 },
        }
    };

    calculateProgress = () => {
        const countDone = (accu, activity) => activity.done ? ++accu : accu;
        const progressClone = JSON.parse(JSON.stringify(this.state.progress));

        Object.keys(progressClone).forEach(category => {
            const categoryActivities = this.filterActivities([category]);
            const categoryActivitiesCount = categoryActivities.length;
            const categoryActivitiesDone = categoryActivities.reduce(countDone, 0);
            const categoryPercentageDone = categoryActivitiesDone / categoryActivitiesCount * 100;

            progressClone[category] = {
                total: categoryActivitiesCount,
                done: categoryActivitiesDone,
                percentage: categoryPercentageDone
            }
        });

        this.setState({
            progress: progressClone
        });
    };

    filterActivities = (categories) => this.state.userActivities.filter(activity => {
        return categories.includes(activity.category.toLowerCase());
    });

    componentDidMount() {
        axios
        .get(`${API_URL}/mybucket/activities`)
        .then(response => {
            this.setState({
                userActivities: response.data,
            });
            this.calculateProgress();
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
        .then(_response => {
            const updatedUserActivities = this.deleteActivity(id);

            this.setState({
                userActivities: updatedUserActivities,
            });

            this.calculateProgress();
        });
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
        .then(_response => {
            const newUserActivities = this.markDoneActivity(id);

            this.setState({
                userActivities: newUserActivities,
            });

            this.calculateProgress();
        });
    };

    handleChallenge = (event) => {
        event.preventDefault();

        axios
        .get(`${API_URL}/mybucket/activities/random`)
        .then(response => {
            this.props.history.push(`/activities/${response.data.id}`);
        });
    };

    render() {
        if (this.state.userActivities === []) {
            return <div>Loading...</div>
        };

        const { userActivities } = this.state;

        return (
            <>
            <Header/>
            <main className='profile'>
                <div className='profile__top'>
                    <img src={UserImage} alt='Jen Smith' className='profile__image'/>
                    <Button
                    className='bucket-list__button'
                    text='CHALLENGE ME!'
                    onClick={this.handleChallenge}/>
                </div>
                <section className='bucket-list'>
                    <p className='bucket-list__heading'>My Progress</p>
                    <ul className='bucket-list__categories'>
                        {categories.map((category, i) => (
                            <li key={i} className='bucket-list__category-bar'>
                                <CategoryBar
                                category={category}
                                percentage={this.state.progress[category]['percentage']}/>
                            </li>
                        ))}
                    </ul>
                    <p className='bucket-list__heading'>My Bucket</p>
                </section>
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
            </main>
            </>
        );
    };
};

export default UserBucket;