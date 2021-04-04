import './SearchField.scss';

const SearchField = ({ searchOnChange, searchValue }) => {
    return (
        <label>
            <input className='search' type='search' name='search' placeholder='Search' onChange={searchOnChange} value={searchValue}/>
        </label>
    );
};

export default SearchField;