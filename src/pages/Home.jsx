import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import ProductGallery from "../components/ProductsGallery/ProductGallery"
import Blogs from "../components/Blogs/Blogs"
import Reviews from "../components/Reviews/Reviews"
import SwapyComponent from "../components/SwapyComponent/SwapyComponent"

const Home = () => {
    return (
        <div>
            <Hero/>
            <Banner />
            <ProductGallery />
            <Blogs />
            {/* <Reviews /> */}
            <SwapyComponent />
        </div>
    )
}

export default Home