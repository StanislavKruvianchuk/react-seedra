import './index.scss'
import spinachBlog from '../../assets/spinach_blog.png'

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
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM11.7 9.9H9C8.46 9.9 8.1 9.54 8.1 9V4.5C8.1 3.96 8.46 3.6 9 3.6C9.54 3.6 9.9 3.96 9.9 4.5V8.1H11.7C12.24 8.1 12.6 8.46 12.6 9C12.6 9.54 12.24 9.9 11.7 9.9Z" fill="#70737C" />
                </svg>
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