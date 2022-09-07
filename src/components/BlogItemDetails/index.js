// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogs: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItems()
  }

  getBlogItems = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedItems = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({blogs: updatedItems, isLoading: false})
  }

  render() {
    const {blogs, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogs
    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="blogs-container">
            <h1 className="blog-topics">{title}</h1>
            <div className="blog-avatar-container">
              <img src={avatarUrl} alt={author} className="blog-avatar" />
              <p className="blog-author">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-image" />
            <p className="blog-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
