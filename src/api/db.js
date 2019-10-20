import Sha1 from 'sha1'
import Axios from 'axios';

const NOW = Date.now()
const config = {
	baseHost: 'https://d.apicloud.com/mcm/api',
	appId: 'A6025488616288',
	addKey: '66F96C1B-95B9-4ACD-6D40-DB4A85F0523A'
}

// 设置连接数据库的axios
const request = (url = config.baseHost) => Axios.create({
  baseURL: url,
  headers: {
    'X-APICloud-AppId': config.appId,
    'X-APICloud-AppKey': `${Sha1(`${config.appId}UZ${config.addKey}UZ${NOW}`)}.${NOW}`
  }
})
// 创建对象
export class DBConn {
	constructor(baseHost) {
		this.request = request()
    this.url = baseHost
	}
	// 初始化
	init(baseHost) {

	}
	// 创建一条记录
	create(data) {
		return this.request.post(data)
	}
	// 删除一条记录
	delete(id) {
		return this.request.post(this.url, { id, _method: 'DELETE'})
	}
	// 更新一条记录
	update(id, data) {
		return this.request(this.url, {
			id,
			...data,
			_method: 'PUT'
		})
	}
	// 查询全表
	selectAll() {
		return this.request.get(this.url)
	}
	// 根据id查询一条记录
	selectOne(id) {
		return this.request.get(this.url, { id })
	}
	// 列表查询
  selectList(limit = 5) {
    let filter = {
      limit
    }
    return this.request.get(this.url, {
      params: {
        filter
      }
    })
  }
}
