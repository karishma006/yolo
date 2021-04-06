import ProgressBar from '@ramonak/react-progress-bar';

import Intelligence from '../../assets/icons/category-1.svg';
import Fitness from '../../assets/icons/category-2.svg';
import Fun from '../../assets/icons/category-3.svg';
import Adventure from '../../assets/icons/category-4.svg';
import Creativity from '../../assets/icons/category-5.svg';
import './CategoryBar.scss';

const categories = {
    'intelligence': { icon: Intelligence, color: '#347DA2' },
    'creativity': { icon: Fitness, color: '#644C8A' },
    'fun': { icon: Fun, color: '#C44978' },
    'adventure': { icon: Adventure, color: '#389E95' },
    'fitness': { icon: Creativity, color: '#DC5349' },
};

const CategoryBar = ({ category, percentage }) => {
    return (
        <article className='category-bar'>   
            <div className='category-bar__element'>
                <div className={`category-bar__circle category-bar__circle--category-${category}`}>
                    <img src={categories[category]['icon']} alt={category}/>
                </div>
                <div className='category-bar__wrapper'>
                    <p className='category-bar__label'>{category}</p>
                    <ProgressBar
                    completed={percentage}
                    baseBgColor='#F3DAC3'
                    bgColor={categories[category]['color']}
                    height='0.5rem'
                    borderRadius='0 0.25rem 0.25rem 0'
                    isLabelVisible={false}/>
                </div>
            </div>   
        </article>
    );
};

export default CategoryBar;