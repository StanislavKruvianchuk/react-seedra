import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import ProductGallery from "../components/ProductsGallery/ProductGallery"
import Blogs from "../components/Blogs/Blogs"
import Reviews from "../components/Reviews/Reviews"

const Home = () => {
    return (
        <div>
            <Hero/>
            <Banner />
            <ProductGallery />
            <Blogs />
            <Reviews />
        </div>
    )
}

export default Home