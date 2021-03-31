import './CategoryNav.scss';
import CategoryLabel from '../CategoryLabel/CategoryLabel';

function CategoryNav({ categories }) {
    return (
        <section className='categories'>
            <ul className='categories__list'>
                {categories.map((category, i) => (
                    <li key={i} className='categories__item'>
                        <CategoryLabel
                        category={category}/>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CategoryNav;