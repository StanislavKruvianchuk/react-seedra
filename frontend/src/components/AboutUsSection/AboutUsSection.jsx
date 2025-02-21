import './index.scss';
import Image from '../../assets/about-us.png';

const AboutUsSection = () => {
    return (
        <section className='about-us main-wrapper'>
            <div className='about-us__wrapper'>
               <div className="about-us__text">
                    <h2 className='about-us__title h2'>Seedra helps to grow fast and efficiant</h2>
                    <p>
                        SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George
                    </p>
                    <p>
                        Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. 
                        Your easy growing experience is our guarantee
                        Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more
                    </p>
                    <p>
                        Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product
                    </p>
               </div>
               <div className="about-us__image-wrapper">
                <img className='about-us__image' src={Image} alt="About us image" />
               </div>

            </div>
        </section>
    )
}

export default AboutUsSection