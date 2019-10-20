import React from 'react'
import MusicSummaryItem from './music-summary-item'
import './music-summary.styl'
import { MusicService } from "../../api/music";
import { ArrUtil } from "../../utils/arr-util";

const musicService = new MusicService()
export default class MusicSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 默认播放歌曲
      playUrl: 'https://open.spotify.com/embed/track/1dGr1c8CrMLDpV6mPbImSI',
      musicList: []
    }
  }
  componentDidMount() {
    this.getMusicList()
  }

  async getMusicList() {
    let result = await musicService.getMusicList(6)
    this.setState({
      musicList: result.data
    })
  }

  // 格式化数组
  static formatMusicList(arr, len = 3) {
    return ArrUtil.splitArr(arr, len)
  }
  play(url) {
    this.setState({
      playUrl: url
    })
  }
  render() {
    let musicList = MusicSummary.formatMusicList(this.state.musicList)
    return (
      <div className="music-summary">
        <h2 className="module-title">Favorite Music</h2>
        <div className="music-summary-container">
          <iframe
            title='play-iframe-spotify'
            src={this.state.playUrl}
            height="380"
            frameBorder="0"
            allow="encrypted-media">
          </iframe>
          <div className="music-group-container">
            {
              musicList.map((item, index) => {
                return (
                  <div
                    key={`music_group_${index}`}
                    className="music-group">
                    {
                      item.map((music, index) => {
                        return (
                          <div
                            onClick={this.play.bind(this, music.url)}
                            key={music.id}
                            className="music-li">
                            <MusicSummaryItem music={ music }/>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
