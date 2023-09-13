
import PropTypes from 'prop-types';

import {FaBookmark } from 'react-icons/fa';


const Blog = ({blog,handleAddToBookMark,handleMarkAsRead}) => {
  const {title,cover, author_img, author,posted_date,reading_time,hashtags, } = blog;
    return (
        <div className='mb-20 space-y-5'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className=' flex justify-between mt-8'>
              <div className='flex items-center gap-6'>
                <img className='w-16 ' src={author_img} alt="" />
                <div>
                   <h4 className='text-2xl'>{author}</h4>
                   <p>{posted_date}</p>
                </div>
              </div>
              <div className='flex items-center'>
                <span> {reading_time} min read</span>
                <button onClick={() =>handleAddToBookMark(blog)} className='ml-2 text-2xl text-red-500' > <FaBookmark></FaBookmark></button>
              </div>

            </div>
          <h2 className="text-2xl my-5">{title}</h2>
           <p>
            {
              hashtags.map((hash,idx) => <span className='mr-5' key={idx}><a>#{hash} </a></span>)
            }
           </p>
           <button className='text-indigo-700 underline'  onClick={() =>handleMarkAsRead(reading_time)}>Mark As Read</button>
           <div className='my-5'>
              <hr />
           </div>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object,
    handleAddToBookMark:PropTypes.function,
    handleMarkAsRead:PropTypes.function
}

export default Blog;