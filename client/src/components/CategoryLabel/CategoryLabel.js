import './CategoryLabel.scss';
import Category1Icon from '../../assets/icons/category-1.svg';
import Category2Icon from '../../assets/icons/category-2.svg';
import Category3Icon from '../../assets/icons/category-3.svg';
import Category4Icon from '../../assets/icons/category-4.svg';
import Category5Icon from '../../assets/icons/category-5.svg';

function CategoryLabel({ category }) {
    return (
        <article className='categories__card'>
            <div className={`categories__circle categories__circle--category-${category}`}>
                {category==='intelligence' && <img src={Category1Icon} alt={category}/>}
                {category==='fitness' && <img src={Category2Icon} alt={category}/>}
                {category==='fun' && <img src={Category3Icon} alt={category}/>}
                {category==='adventure' && <img src={Category4Icon} alt={category}/>}
                {category==='creativity' && <img src={Category5Icon} alt={category}/>}
            </div>
            {category==='intelligence' && <p className='categories__title'>{category[0].toUpperCase() + category.substring(1)}</p>}
            {category==='fitness' && <p className='categories__title'>{category[0].toUpperCase() + category.substring(1)}</p>}
            {category==='fun' && <p className='categories__title'>{category[0].toUpperCase() + category.substring(1)}</p>}
            {category==='adventure' && <p className='categories__title'>{category[0].toUpperCase() + category.substring(1)}</p>}
            {category==='creativity' && <p className='categories__title'>{category[0].toUpperCase() + category.substring(1)}</p>}
        </article>
    );
};

export default CategoryLabel;