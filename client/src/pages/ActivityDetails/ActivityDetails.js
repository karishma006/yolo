import './ActivityDetails.scss';
import { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils';
import BackIcon from '../../assets/icons/back.svg';
import DownIcon from '../../assets/icons/down.svg';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

class ActivityDetails extends Component {
    state = {
        activity: {},
    };

    componentDidMount() {
        axios
        .get(`${API_URL}/activities/${this.props.match.params.activityId}`)
        .then(response => {
            this.setState({
                activity: response.data,
            });
        });
    };

    // componentDidUpdate() {
    //     axios
    //     .get(`${API_URL}/activities/${this.props.match.params.activityId}`)
    //     .then(response => {
    //         this.setState({
    //             activity: response.data,
    //         });
    //     });
    // };

    render() {
        const { category, title, description, knowMore } = this.state.activity;
        return (
            <main className={category==='intelligence' ? 'activity activity--category-1' : category==='fitness' ? 'activity activity--category-2' : category==='fun' ? 'activity activity--category-3' : category==='adventure' ? 'activity activity--category-4' : category==='creativity' ? 'activity activity--category-5' : 'activity'}>
                <img className='activity__back-icon' src={BackIcon} alt='Back Icon'/>
                <article className='activity__card'>
                    <h3 className='activity__card__title'>{title}</h3>
                    <p className='activity__card__description'>{description}</p>
                    <Link to={knowMore} className='activity__card__link'>Know more</Link>
                    <Button
                    className='activity__card__button'
                    text='+ Add to my bucket'/>           
                </article>
                <div className='activity__wrapper'>
                    <p className='activity__text'>See what people are saying</p>
                    <img className='activity__down-icon' src={DownIcon} alt='Back Icon'/>
                </div>
            </main>
        );
    };
};

export default ActivityDetails;