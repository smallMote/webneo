import { DBConn } from './db'

export class ArticleBean {
  constructor (
    title,
    author,
    desc,
    content,
    thumLink,
    createTime,
    like = 0,
    idea = 0,
    kind = 'archive') {
    this.like = like
    this.idea = idea
    this.desc = desc
    this.kind = kind
    this.title = title
    this.author = author
    this.content = content
    this.thumLink = thumLink
    this.createTime = createTime
  }
}

export class ArticleService extends DBConn {
  constructor () {
    super('/t_article')
  }
  // 添加文章
  addArticle (article) {
    return this.insert({ ...article })
  }
  // 查询全部
  getArticleAll () {
    return this.selectAll()
  }
  // 查询文章详情
  getArticleDetails (id) {
    return this.selectOne(id)
  }
  // 分页查询（limit）
  getArticleList(limit) {
    return this.selectList(limit)
  }
}
