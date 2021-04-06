import ProgressBar from '@ramonak/react-progress-bar';
import IntelligenceIcon from '../../assets/icons/intelligence.svg';
import CreativityIcon from '../../assets/icons/creativity.svg';
import FunIcon from '../../assets/icons/fun.svg';
import AdventureIcon from '../../assets/icons/adventure.svg';
import FitnessIcon from '../../assets/icons/fitness.svg';
import './CategoryBar.scss';

const categories = {
    'intelligence': { icon: IntelligenceIcon, color: '#347DA2' },
    'creativity': { icon: CreativityIcon, color: '#644C8A' },
    'fun': { icon: FunIcon, color: '#C44978' },
    'adventure': { icon: AdventureIcon, color: '#389E95' },
    'fitness': { icon: FitnessIcon, color: '#DC5349' },
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