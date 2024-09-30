import './index.scss';
import FilterButton from '../FilterButton/FilterButton';

const Filters = ({ handleFilterButtonClick, selectedFilters, filters }) => {
    return (
        <div className='filters'>
            <div className="filters__wrapper">
                {
                    filters.map((filter, i) => {
                        return (
                            <FilterButton filter={filter} 
                                handleFilterButtonClick={handleFilterButtonClick} 
                                selectedFilters={selectedFilters} 
                                category={filter.title} 
                                i={filter.i} 
                                key={i} 
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Filters