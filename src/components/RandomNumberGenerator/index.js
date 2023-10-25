import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  getRandomNum = () => {
    const random = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: random})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            type="button"
            className="button-edit"
            onClick={this.getRandomNum}
          >
            Generate
          </button>
          <p className="para">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
