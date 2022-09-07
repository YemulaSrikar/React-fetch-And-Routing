// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, topic, title, imageUrl, author, avatarUrl} = blogDetails
  return (
    <Link className="link" to={`/blogs/${id}`}>
      <div className="item-container">
        <div className="image-topics-container">
          <img src={imageUrl} alt="url" className="image-url" />
          <div>
            <h1 className="topic">{topic}</h1>
            <p className="title">{title}</p>
            <div className="avatar-container">
              <img src={avatarUrl} alt="url" className="avatar" />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
