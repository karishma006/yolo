import './ActivityNav.scss';
import { Link } from 'react-router-dom';
import ActivityCard from '../ActivityCard/ActivityCard';

function ActivityNav({ activities }) {
    return (
        <section className='activity-nav'>
            <nav>
                {activities.map(activity => (
                    <Link key={activity.id} to={`/activities/${activity.id}`} className='activity-nav__link'>
                        <ActivityCard
                        activity={activity}/>
                    </Link>
                ))};
            </nav>
        </section>
    );
};

export default ActivityNav;