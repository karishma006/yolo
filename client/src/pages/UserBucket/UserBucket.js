import { Component } from 'react';
import axios from 'axios';

import Header from '../../components/Header/Header';
import UserImage from '../../assets/images/user-0.jpg';
import AddIcon from '../../assets/icons/add.svg';
import { API_URL } from '../../utils';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import Button from '../../components/Button/Button';
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
        const { category } = this.state.activities;

        return (
            <>
            <Header/>
            <main className='user-profile'>
                <img src={UserImage} alt='user-image' className='user-profile__image'/>
                <CategoryBar
                category={category}/>
                <Button
                className='user-profile__button'
                text='CHALLENGE ME!'/>
                <section className='user-bucket'>
                    <header className='user-bucket__header'>
                        <p className='user-bucket__heading'>My Bucket</p>
                        <img className='user-bucket__icon' src={AddIcon} alt='plus-icon'/>
                    </header>
                </section>
            </main>
            </>
        );
    };
};

export default UserBucket;