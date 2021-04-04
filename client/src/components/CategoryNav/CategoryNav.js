import './CategoryNav.scss';
import CategoryLabel from '../CategoryLabel/CategoryLabel';

const CategoryNav = ({ categories, filterOnClick, filteredCategories }) => {
    return (
        <section className='categories'>
            <ul className='categories__list'>
                {categories.map((category, i) => (
                    <li key={i} className='categories__item'>
                        <CategoryLabel
                        category={category}
                        filterOnClick={filterOnClick}
                        filteredCategories={filteredCategories}/>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CategoryNav;