import './SearchField.scss';

const SearchField = ({ activitiesOnChange, searchValue }) => {
    return (
        <label>
            <input className='search' type='search' name='search' placeholder='Search' onChange={activitiesOnChange} value={searchValue}/>
        </label>
    );
};

export default SearchField;