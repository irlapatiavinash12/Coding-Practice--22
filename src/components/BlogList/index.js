// Write your JS code here

import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogList} = props
  return (
    <ul className="unorderedList-styling">
      {blogList.map(eachBlog => (
        <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
