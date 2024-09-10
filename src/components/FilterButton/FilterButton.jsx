import './index.scss'
import double_cards from '../../assets/double_cards.png';
import flower from '../../assets/flower.png';
import leave from '../../assets/leave.png';
import leave_second from '../../assets/leave_second.png';
import gardering_tool from '../../assets/gardening_tool.png';
import strawberry from '../../assets/strawberry.png';
import tomato from '../../assets/tomato.png';
import { useState } from 'react';


const FilterButton = ({ filter }) => {    
    const [active, setActive] = useState(false)

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

    const onButtonClick = () => {
        setActive(!active)
    }

    let buttonClass = '';

    if (active) {
        buttonClass = 'filter-button filter-button--active'
    } else {
        buttonClass = 'filter-button'
    }

    return (
        <button onClick={onButtonClick} className={buttonClass}>
             <img src={imageSrc} alt={title} />
            <span> {title}</span>
        </button>
    )
}

export default FilterButton