
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 mt-7  ml-4 ">
            <div className='bg-indigo-200 text-center p-4 rounded-lg border border-indigo-700' >
                <h3 className='text-3xl text-indigo-700'>Reading Time: {readingTime} min</h3>
            </div>
           <div className='bg-gray-300 pb-4'>
             <h2 className="text-2xl text-center mt-3">Bookmarked Blogs: {bookmarks.length}</h2>
             <div>
                {
                    bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
                }
             </div>
           </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;