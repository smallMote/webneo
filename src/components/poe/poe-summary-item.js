import React from 'react'
import './summary-item.styl'
export default class PoeSummaryItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    const { poe } = this.props
    let cover = poe.cover || require('../../assets/images/lover.jpeg')
    return (
      <div
        style={{backgroundImage: `url(${poe.cover})`}}
        className="poe-summary-item neo-card">
        <h4 className="title">{ poe.title }</h4>
        <p className="author">
          <span>{ poe.author }</span>
        </p>
        <section
          dangerouslySetInnerHTML={{ __html: poe.content }} >
        </section>
        <div className="image-cover">
          <img src={cover} alt={poe.title}/>
        </div>
      </div>
    )
  }
}
