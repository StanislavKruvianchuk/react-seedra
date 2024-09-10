import './index.scss';
import FilterButton from '../FilterButton/FilterButton';
import filters from '../../dataFilters';

const Filters = () => {
    return (
        <div className='filters'>
            <div className="filters__wrapper">
                {
                    filters.map((filter) => {
                        return (
                            <FilterButton filter={filter} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Filters