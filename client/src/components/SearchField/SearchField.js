import './SearchField.scss';

function SearchField() {
    return (
        <label>
            <input className='search' type='search' name='search' placeholder='Search'/>
        </label>
    );
};

export default SearchField;