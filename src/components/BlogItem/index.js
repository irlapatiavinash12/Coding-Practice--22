// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {id, title, description, publishedDate} = eachBlog

  return (
    <li className="list-container">
      <div className="date-tite-container">
        <h3 className="title-text">{title}</h3>
        <p className="date-text">{publishedDate}</p>
      </div>
      <p className="date-text">{description}</p>
    </li>
  )
}

export default BlogItem
