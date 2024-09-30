import "./index.scss";
import BlogsBlock from "../BlogsBlock/BlogsBlock";
import blogsList from '../../dataBlogs';

const Blogs = () => {
    return (
        <section className="blogs main-wrapper">
            <article className="blogs__wrapper">
                <div className="blogs__container">
                    <div className="blogs__top">
                        <h2 className="h2">Our blog.</h2>
                        <button className="main-button">Go to our blog</button>
                    </div>
                    <div className="blogs__list">
                        {
                            blogsList.map((item, i) => {
                                return (
                                    <BlogsBlock item={item} key={i}/>
                                )
                            })
                        }
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Blogs