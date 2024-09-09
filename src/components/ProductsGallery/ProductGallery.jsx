import './index.scss';
import ProductCard from '../ProductCard/ProductCard';
import Filters from '../Filters/Filters';
import products from '../../data';

const ProductGallery = () => {
    return (
        <div className='gallery main-wrapper'>
                <Filters />
            <div className="gallery__wrapper">
                {
                    products.map((product) => {
                        return (
                            <div>
                                <ProductCard  product={product} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductGallery