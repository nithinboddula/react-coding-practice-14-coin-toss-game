import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {totalCount: 0, headCount: 0, tailCount: 0, isHead: true}

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
        headCount: prevState.headCount + 1,
        isHead: true,
      }))
    } else {
      this.setState(prevState => ({
        totalCount: prevState.totalCount + 1,
        tailCount: prevState.tailCount + 1,
        isHead: false,
      }))
    }
  }

  render() {
    const {isHead, totalCount, headCount, tailCount} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          {isHead ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="result-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="result-image"
            />
          )}
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
