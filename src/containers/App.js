import React, { Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link to='/admin' className='nav-link'>Админка</Link>
          </li>
          <li className='nav-item'>
            <Link to='/list' className='nav-link'>Список жанров</Link>
          </li>
          <li className='nav-item'>
            <Link to='/login' className='nav-link'>Войти</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )

  }
}
