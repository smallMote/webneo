import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.styl'
export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'Home'
    }
  }

  componentDidMount() {

  }

  // 菜单选择
  menuActive(item) {
    this.setState({
      selected: item.name
    })
  }

  render() {
    const { selected } = this.state
    return (
        <div className="nav-bar">
          <div className="nav-logo">
            <a
              target={'_blank'}
              href="https://github.com/smallMote">
              <i className="fa fa-github"/>
            </a>
            Web Neo
          </div>
          <ul>
            {
              this.props.routes.map((item, index) => {
                return (
                  <li
                    key={ `${item.name}_${index}` }
                    onClick={ this.menuActive.bind(this, item) }
                  >
                    <Link
                      to={ item.path }
                      className={`nav-option ${ selected === item.name ? 'active' : ''}`}
                    >
                      <i className={ `fa ${item.icon}` }/>
                      { item.name }
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <div className="copyright">
            ©2019 尼奥网 版权所有
            <p>ICP证：黔ICP备18004184号</p>
          </div>
        </div>
    )
  }
}
