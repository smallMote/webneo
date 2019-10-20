import React from 'react'
import './music-item.styl'

export default class MusicSummaryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let { music } = this.props
    return (
      <div className="music-summary-item">
        <div className="music-img">
          <div className="desc">
            <p className="music-author">{ music.artist || 'Unknown' }</p>
            <p className="music-name">{ music.name || 'Unknown'}</p>
          </div>
          <div className="img-container">
            <img src={music.cover || require('../../assets/images/lover.jpeg')} alt=""/>
            <i className="fa fa-play-circle-o"/>
          </div>
        </div>
      </div>
    )
  }
}
