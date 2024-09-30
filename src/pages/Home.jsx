import Hero from "../components/Hero/Hero"
import Banner from "../components/Banner/Banner"
import ProductGallery from "../components/ProductsGallery/ProductGallery"
import Blogs from "../components/Blogs/Blogs"
import Reviews from "../components/Reviews/Reviews"
// import SwapyComponent from "../components/SwapyComponent/SwapyComponent"
import AboutUs from "../components/AboutUsSection/AboutUsSection"
import AboutUsSection from "../components/AboutUsSection/AboutUsSection"

const Home = () => {
    return (
        <div>
            <Hero/>
            <Banner />
            <ProductGallery />
            <Blogs />
            <Reviews />
            {/* <SwapyComponent /> */}
            <AboutUsSection />
        </div>
    )
}

export default Home