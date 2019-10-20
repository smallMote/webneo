import React, { Component } from 'react'
import ArticleSummary from '../../components/article/article-summary'
import PoeSummary from '../../components/poe/poe-summary'
import MusicSummary from '../../components/music/music-summary'
import PhotographSummary from '../../components/photograph/photograph-summary'
import './home.styl'
export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className="page-home">
        <div className="page-item">
          <PoeSummary />
        </div>
        <div className="page-item">
          <MusicSummary />
        </div>
        <div className="page-item">
          <ArticleSummary />
        </div>
        <div className="page-item">
          <PhotographSummary />
        </div>
      </div>
    )
  }
}
