import './Home.scss';
import { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils';
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

        return (
        <main className='main'>
            <ActivityNav
            activities={activities}/>
        </main>
        );
    };
};

export default Home;