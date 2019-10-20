import React from 'react'
import PoeSummaryItem from './poe-summary-item'
import './poe-summary.styl'

import { PoeService } from '../../api/poe'
const poeService = new PoeService()

export default class PoeSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poeList: [1, 2, 3]
    }
  }
  componentDidMount() {
    this.getPoeList()
  }

  async getPoeList () {
    let result = await poeService.getPoeList(3)
    this.setState({
      poeList: result.data
    })
  }
  render() {
    return (
      <div className="poe-summary">
        <h2 className="module-title">Recently Poe</h2>
        <div className="poe-group">
          {
            this.state.poeList.map((item, index) => {
              return (
                <div
                  key={ index }
                  className={`poe-li ${index === 1 ? 'middle' : ''}`}>
                  <PoeSummaryItem poe={item} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

}
