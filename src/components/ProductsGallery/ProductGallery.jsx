import './index.scss';
import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import Filters from '../Filters/Filters';
import products from '../../data';
import filtersData from '../../dataFilters';

const ProductGallery = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const productLength = products.length

    let filters = ["bundles", "herbs", "vegetables", "fruits", "supplies", "flowers" ]

    const handleFilterButtonClick = (selectedCategory) => {
        if(selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters)
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory])
        }
    }
    useEffect(() => {
        filterItems();
    }, [selectedFilters])

    const filterItems = () => {
        if(selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = products.filter((item) => item.type.includes(selectedCategory))
                return temp
            })
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...products])
        }
    }

    return (
        <section className='gallery main-wrapper'>
            <div className='gallery__top'>
                <h2 className='gallery__title h2'>Our products.</h2>
                 <button className='gallery__button'>View all ({productLength})</button>
            </div>

            <Filters 
                handleFilterButtonClick={handleFilterButtonClick} 
                selectedFilters={selectedFilters} 
                filters={filtersData} 
            />

            <div className="gallery__wrapper">
                {
                    filteredItems.map((product) => {
                        return (
                            <div key={product.id}>
                                <ProductCard  product={product} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ProductGallery