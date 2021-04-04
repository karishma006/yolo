import Intelligence from '../../assets/icons/category-1.svg';
import Fitness from '../../assets/icons/category-2.svg';
import Fun from '../../assets/icons/category-3.svg';
import Adventure from '../../assets/icons/category-4.svg';
import Creativity from '../../assets/icons/category-5.svg';
import './CategoryBar.scss';

const icons = {
    'intelligence': Intelligence,
    'fitness': Fitness,
    'fun': Fun,
    'adventure': Adventure,
    'creativity': Creativity,
};

const CategoryBar = ({ category }) => {
    return (
        <article className='category-bar'>
            <p className='category-bar__label'>{category}</p>
            <div className='category-bar__element'>
                <div className={`category-bar__circle category-bar__circle--category-${category}`}>
                    <img src={icons[category]} alt={category}/>
                </div>
                <div className='category-bar__status'></div>
            </div>   
        </article>
    );
};

export default CategoryBar;