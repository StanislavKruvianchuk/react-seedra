import './index.scss'
import double_cards from '../../assets/double_cards.png';
import flower from '../../assets/flower.png';
import leave from '../../assets/leave.png';
import leave_second from '../../assets/leave_second.png';
import gardering_tool from '../../assets/gardening_tool.png';
import strawberry from '../../assets/strawberry.png';
import tomato from '../../assets/tomato.png';


const FilterButton = ({ filter, handleFilterButtonClick, selectedFilters, category, i }) => {    
    const { image_type, title } = filter;

    const images = {
        double_cards: double_cards,
        flower: flower,
        leave: leave,
        leave_second: leave_second,
        gardering_tool: gardering_tool,
        strawberry: strawberry,
        tomato: tomato
    };

    const imageSrc = images[image_type];

    return (
        <button onClick={() => handleFilterButtonClick(category)} className={`filter-button ${ 
            selectedFilters?.includes(category) ? "filter-button--active" : ""
        }`} key={`filters-${i}`}>
             <img src={imageSrc} alt={title} />
            <span> {title}</span>
        </button>
    )
}

export default FilterButton