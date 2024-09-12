import './index.scss'
import spinachBlog from '../../assets/spinach_blog.png';
import { ReactComponent as Clock } from '../../assets/icons/clock-three.svg';

const BlogsBlock = ({ item }) => {
    const {time, title, description, button, image_type} = item

    let moreButton

    if (button) {
        moreButton = 
            <a className='block__button' href="/">Read</a>
        
    }

    return (
        <div className='block'>
            <div className='block__wrapper'>
                <div className='block__time'>
                <Clock />
                    {time}
                </div>
                <div className='block__title'>{title}</div>
                <div className='block__description'>{description}</div>
                {moreButton}

            </div>
            <img className='block__image' src={spinachBlog} alt="spinach_blog" />
        </div>
    )
}

export default BlogsBlock