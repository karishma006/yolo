import './CategoryLabel.scss';
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

const CategoryLabel = ({ category, filterOnClick }) => {
    return (
        <a className='categories__card categories__card--active' href='#' onClick={filterOnClick}>
            <div className={`categories__circle categories__circle--category-${category}`}>
                <img src={icons[category]} alt={category}/>
            </div>
            <p className='categories__label'>{category}</p>
        </a>
    );
};

export default CategoryLabel;