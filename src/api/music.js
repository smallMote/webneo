import { DBConn } from './db'

export class MusicBean {
	constructor(name, artist, cover, url, share_link, like, idea) {
		this.like = like
		this.idea = idea
		this.name = name
    this.cover = cover
    this.artist = artist
    this.share_link = share_link
	}
}

export class MusicService extends DBConn {
	constructor () {
		super('/t_music')
	}
	// 添加
	addMusic (music) {
		return this.create({ ...music })
	}
	// 更新
	updateMusic (id, music) {
		return this.update(id, { ...music })
	}
	// 删除
	deleteMusic (id) {
		// waiting
	}
	// 查询全部
  getAllMusic () {
    return this.selectAll()
  }
  // 分页查询（limit）
  getMusicList(limit) {
	  return this.selectList(limit)
  }
}
