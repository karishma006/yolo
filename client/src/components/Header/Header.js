import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'>
                <h1>YOLO</h1>
            </div>
            <nav className='header__nav'>
                <NavLink exact to='/' className='header__link' activeClassName='header__link--active'>Popular Activities</NavLink>
                <NavLink to='/mybucket' className='header__link' activeClassName='header__link--active'>My Bucket</NavLink>
            </nav>
        </header>
    );
};

export default Header;