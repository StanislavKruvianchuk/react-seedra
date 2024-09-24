import './index.scss';
import ProductCard from '../ProductCard/ProductCard';
import Filters from '../Filters/Filters';
import products from '../../data';

const ProductGallery = () => {
    const productLength = products.length
    return (
        <section className='gallery main-wrapper'>
            <div className='gallery__top'>
                <h2 className='gallery__title h2'>Our products.</h2>
                 <button className='gallery__button'>View all ({productLength})</button>
            </div>

                <Filters />
            <div className="gallery__wrapper">
                {
                    products.map((product) => {
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