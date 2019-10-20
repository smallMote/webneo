import React from 'react'
import './photograph-summary.styl'
export default class PhotographSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        {
          src: 'https://s2.ax1x.com/2019/04/15/AvVGad.jpg'
        },
        {
          src: 'https://s2.ax1x.com/2019/05/05/E0Oh6O.jpg'
        },
        {
          src: 'https://s2.ax1x.com/2019/04/15/AvmToQ.png'
        },
        {
          src: 'https://s2.ax1x.com/2019/08/05/eRwoq0.png'
        },
        {
          src: 'https://s2.ax1x.com/2019/04/15/AvVGad.jpg'
        },
        {
          src: 'https://s2.ax1x.com/2019/05/05/E0Oh6O.jpg'
        },
        {
          src: 'https://s2.ax1x.com/2019/04/15/AvmToQ.png'
        },
        {
          src: 'https://s2.ax1x.com/2019/08/05/eRwoq0.png'
        },
      ]
    }
  }

  render() {
    return (
      <div className="photograph-summary">
        <h2 className="module-title">Photograph</h2>
        <section className="neo-card summary-group">
          <div className="summary-item image-lg-item">
            <div className="image-container">
            </div>
          </div>
          <div className="summary-item image-md-item first-item">
            <div className="image-container top">
            </div>
            <div className="bottom">
              <div className="image-container">
              </div>
              <div className="image-container">
              </div>
            </div>
          </div>
          <div className="summary-item image-md-item last-item">
            <div className="bottom">
              <div className="image-container">
              </div>
              <div className="image-container">
              </div>
            </div>
            <div className="image-container top">
            </div>
          </div>
        </section>
      </div>
    )
  }
}
