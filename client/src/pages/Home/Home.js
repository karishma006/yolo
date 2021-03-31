import './Home.scss';
import { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils';
import CategoryNav from '../../components/CategoryNav/CategoryNav';
import ActivityNav from '../../components/ActivityNav/ActivityNav';

class Home extends Component {
    state = {
        activities : [],
    };

    componentDidMount() {
        axios
        .get(`${API_URL}/`)
        .then(response => {
            this.setState ({
                activities: response.data,
            });
        });
    };

    render() {
        if (this.state.activities === []) {
            return <div>Loading...</div>
        };

        const { activities } = this.state;

        const uniqueCategories = [...new Set (activities.map(activity => activity.category))];

        return (
        <main className='main'>
            <CategoryNav
            categories={uniqueCategories}/>
                {/* {uniqueCategories.map((category, i) => (
                    <li key={i} className='categories__list'>
                        <CategoryLabel
                        category={category}/>
                    </li>
                ))} */}
            <ActivityNav
            activities={activities}/>
        </main>
        );
    };
};

export default Home;