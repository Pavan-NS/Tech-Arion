import {Component} from 'react'
import './index.css'

class Card extends Component {
  state = {
    count: 42,
  }

  onclickDecrement = () => {
    this.setState(prev => ({count: prev.count - 3}))
  }

  onclickIncrement = () => {
    this.setState(prev => ({count: prev.count * 3}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="h1">Counter</h1>
        <div className="card-container">
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onclickDecrement}
            >
              -
            </button>
          </div>
          <span className="counter">{count}</span>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onclickIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Card
