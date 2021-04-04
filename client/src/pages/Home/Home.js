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
        showAllCategories: true,
        filteredCategories: { 
            intelligence: false,
            creativity: false,
            fun: false,
            adventure: false,
            fitness: false,
        },
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

    filterOnClick = (event) => {
        event.preventDefault();
        console.log("I'm getting called " + event.target.alt + " " + this.state.filteredCategories[event.target.alt]);
        
        const filteredCategoriesClone = JSON.parse(JSON.stringify(this.state.filteredCategories));
        filteredCategoriesClone[event.target.alt] = !filteredCategoriesClone[event.target.alt] // toggle the categegory clicked
        const newShowAllCategory = !Object.values(filteredCategoriesClone).some(Boolean); // check if any are true.
        
        this.setState({ 
            filteredCategories: filteredCategoriesClone, 
            showAllCategories: newShowAllCategory 
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
                categories={categories}
                filterOnClick={this.filterOnClick}/>
                <ActivityNav
                activities={activities}/>
            </main>
            </>
        );
    };
};

export default Home;