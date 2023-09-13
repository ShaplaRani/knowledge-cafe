
import { useState } from 'react'
import './App.css'
import Blogs from './conponents/Blogs/Blogs'
import Bookmarks from './conponents/Bookmarks/Bookmarks'
import Header from './conponents/header/header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookMark = blog=> {
        const newBookmarks = [...bookmarks,blog];
        setBookmarks(newBookmarks)
  }

const handleMarkAsRead = time =>{
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime)
}

  return (
    <div className='w-9/12 m-auto'>
     
     <Header></Header>
     <div className='md:flex'>
     <Blogs handleAddToBookMark={handleAddToBookMark} handleMarkAsRead ={handleMarkAsRead} ></Blogs>
     <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
     </div>
      
    </div>
  )
}

export default App
