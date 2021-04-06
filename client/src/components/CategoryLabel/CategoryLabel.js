import IntelligenceIcon from '../../assets/icons/intelligence.svg';
import CreativityIcon from '../../assets/icons/creativity.svg';
import FunIcon from '../../assets/icons/fun.svg';
import AdventureIcon from '../../assets/icons/adventure.svg';
import FitnessIcon from '../../assets/icons/fitness.svg';
import './CategoryLabel.scss';

const icons = {
    'intelligence': IntelligenceIcon,
    'creativity': CreativityIcon,
    'fun': FunIcon,
    'adventure': AdventureIcon,
    'fitness': FitnessIcon,
};

const CategoryLabel = ({ category, filterOnClick, filteredCategories }) => {
    return (
        <>
            <a className={`categories__card ${filteredCategories[category] ? 'categories__card--active' : ''}`} href='#' onClick={event => filterOnClick(category, event)}>
                <div className={`categories__circle categories__circle--category-${category}`}>
                    <img src={icons[category]} alt={category}/>
                </div>
                <p className='categories__label'>{category}</p>  
            </a>
        </>
    );
};

export default CategoryLabel;