import './Home.scss';
import { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils';
import { categories } from '../../utils';
import Header from '../../components/Header/Header';
import SearchField from '../../components/SearchField/SearchField';
import CategoryNav from '../../components/CategoryNav/CategoryNav';
import ActivityNav from '../../components/ActivityNav/ActivityNav';

class Home extends Component {
    state = {
        activities : [],
        searchValue: '',
    };

    componentDidMount() {
        axios
        .get(`${API_URL}/`)
        .then(response => {
            this.setState({
                activities: response.data,
            });
        });
    };

    activitiesOnChange = (event) => {
        this.setState({
            searchValue: event.taget.value,
        });
    };

    render() {
        if (this.state.activities === []) {
            return <div>Loading...</div>
        };

        const { activities } = this.state;

        const filteredActivities = activities.filter(activity => {
            return activity.title.toLowerCase().includes(this.state.searchValue.toLowerCase());
        });

        return (
            <>
            <Header/>
            <main className='main'>
                <SearchField/>
                <CategoryNav
                categories={categories}/>
                <ActivityNav
                activities={activities}
                activitiesOnChange={this.activitiesOnChange}
                searchValue={this.state.searchValue}/>
            </main>
            </>
        );
    };
};

export default Home;