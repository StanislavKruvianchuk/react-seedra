import "./index.scss";
import BlogsBlock from "../BlogsBlock/BlogsBlock";
import blogsList from '../../dataBlogs';

const Blogs = () => {
    return (
        <div className="blogs main-wrapper">
            <div className="blogs__wrapper">
                <div className="blogs__container">
                    <div className="blogs__top">
                        <h2 className="h2">Our blog.</h2>
                        <button className="main-button">Go to our blog</button>
                    </div>
                    <div className="blogs__list">
                        {
                            blogsList.map((item) => {
                                return (
                                    <BlogsBlock item={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs