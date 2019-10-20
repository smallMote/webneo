import React from 'react'
import './article-summary.styl'
import { CurrentTime } from "../../utils/date-util";
import { ArticleService } from "../../api/article";
const articleService = new ArticleService()
export default class ArticleSummary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      article: null
    }
  }
  componentDidMount () {
    this.getArticleList()
  }

  async getArticleList () {
    let result = await articleService.getArticleList(2)
    this.setState({
      article: result.data[1]
    })
  }

  render() {
    let article = this.state.article
    return (
      <div className='article-summary'>
        <h2 className="module-title">Recently Article</h2>
        <div className="neo-card">
          <h4 className="title">{ article && article.title }</h4>
          <section
            dangerouslySetInnerHTML={{ __html: article && article.content }}>
          </section>
          <div className="tips">
            <span>{ article && article.author }</span> -
            <span>{ CurrentTime() }</span>
          </div>
        </div>
      </div>
    )
  }
}
