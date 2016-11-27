import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

export default class Home extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const value = e.target.elements[0].value.toLowerCase()
    this.context.router.push(`/genre/${value}`)
  }
  componentDidMount() {
    this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
  }
  routerWillLeave() {
    // let answer = window.confirm('Вы уверены?')
    // if(!answer)
    //   return false
    return 'Вы уверены?'
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>Раздел /</div>
        <form className='col-md-4' onSubmit={this.handleSubmit}>
          <input type='text' placeholder='genreName' />
          <button type='submit'>Перейти</button>
        </form>
      </div>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequires
}

/*
У меня есть парочка вопросов на знание экосистемы react'a.

1. Зачем используется this.handleSubmit = this.handleSubmit.bind(this) ?
2. Будет ли работать this.context.router.push если убрать последние три строки
(там где проверяются props) ?

Ответы:
1. React с версии 0.14 (предыдущей, перед 15.0) не использует автобиндинг если
используются ES2015 классы. Мы должны забиндить this явно.
2. Работать не будет, так как this.context можно использовать только при наличии
проверки contextTypes.
*/
