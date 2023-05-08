// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onClickedLeftArrow = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState({activeIndex: activeIndex - 1})
    }
  }

  onClickedRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState({activeIndex: activeIndex + 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      `${activeIndex}`
    ]

    return (
      <div className="bg-container">
        <div className="left-arrow-container">
          <button className="btn" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              data-testid="leftArrow"
              onClick={this.onClickedLeftArrow}
            />
          </button>
        </div>
        <div className="review-container">
          <h1 className="heading">Reviews</h1>
          <img className="profile-img" src={imgUrl} alt={username} />
          <p className="username">{username}</p>
          <p className="company">{companyName}</p>
          <p className="description">{description}</p>
        </div>
        <div className="right-arrow-container">
          <button className="btn" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              data-testid="rightArrow"
              onClick={this.onClickedRightArrow}
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
