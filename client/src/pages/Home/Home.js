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
        allActivities: [],
        activities : [],
        searchValue: '',
        filteredCategories: [],
    };

    componentDidMount() {
        axios
        .get(`${API_URL}/`)
        .then(response => {
            this.setState({
                allActivities: response.data,
                activities: response.data,
            });
        });
    };

    searchActivities = (searchValue) => this.state.allActivities.filter(activity => {
        return activity.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    searchOnChange = (event) => {
        const newActivities = this.searchActivities(event.target.value)
        this.setState({
            searchValue: event.target.value,
            activities: newActivities,
        });
    };

    render() {
        if (this.state.activities === []) {
            return <div>Loading...</div>
        };

        const { activities } = this.state;

        return (
            <>
            <Header/>
            <main className='main'>
                <SearchField
                searchOnChange={this.searchOnChange}
                searchValue={this.state.searchValue}/>
                <CategoryNav
                categories={categories}/>
                <ActivityNav
                activities={activities}/>
            </main>
            </>
        );
    };
};

export default Home;