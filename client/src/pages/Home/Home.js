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

    filterOnClick = (category, event) => {
        event.preventDefault();

        const filteredCategoriesClone = JSON.parse(JSON.stringify(this.state.filteredCategories));
        filteredCategoriesClone[category] = !filteredCategoriesClone[category];
        let newShowAllCategory = !Object.values(filteredCategoriesClone).some(Boolean);
        const categoriesToFilter = Object.keys(filteredCategoriesClone).filter(key => filteredCategoriesClone[key] === true);
        const newActivities = newShowAllCategory ? this.state.allActivities : this.filterActivities(categoriesToFilter);

        if (Object.values(filteredCategoriesClone).every(Boolean)) {
            newShowAllCategory = !newShowAllCategory;
            Object.keys(filteredCategoriesClone).forEach(key => filteredCategoriesClone[key] = false);
        };

        this.setState({
            filteredCategories: filteredCategoriesClone,
            showAllCategories: newShowAllCategory,
            activities: newActivities,
        });
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

    filterActivities = (categories) => this.state.allActivities.filter(activity => {
        return categories.includes(activity.category.toLowerCase());
    });

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
                categories={categories}
                filteredCategories={this.state.filteredCategories}
                filterOnClick={this.filterOnClick}/>
                <ActivityNav
                activities={activities}/>
            </main>
            </>
        );
    };
};

export default Home;