import './UserBucket.scss';
import { Component } from 'react';
import Header from '../../components/Header/Header';
import UserImage from '../../assets/images/user-0.jpg';
import Intelligence from '../../assets/icons/category-1.svg';
import Fitness from '../../assets/icons/category-2.svg';
import Fun from '../../assets/icons/category-3.svg';
import Adventure from '../../assets/icons/category-4.svg';
import Creativity from '../../assets/icons/category-5.svg';

const icons = {
    'intelligence': Intelligence,
    'fitness': Fitness,
    'fun': Fun,
    'adventure': Adventure,
    'creativity': Creativity,
};

class UserBucket extends Component {
    state = {
        activities: [],
    };

    
    
    render() {
        return (
            <>
            <Header/>
            <main className='user-bucket'>
                <img src={UserImage} alt='user image' className='user-bucket__image'/>
                <div className={`user-bucket__circle user-bucket__circle--category-${category}`}>
                    <img src={icons[category]} alt={category}/>
                </div>
            </main>
            </>
        );
    };
};

export default UserBucket;