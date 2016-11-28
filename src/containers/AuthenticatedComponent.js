import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ROUTING } from '../constants/Routing'

export default function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth(this.props.user)
    }
    componentDidMount(nextProps) {
      this.checkAuth(nextProps.user)
    }
    checkAuth(user) {
      if(!user.isAuthenticated) {
        this.props.dispatch({
          type: ROUTING,
          payload: {
            method: 'replace',
            nextUrl: '/login'
          }
        })
      }
    }
    render() {
      return (
        <div>
          {this.props.user.isAuthenticated === true
            ? <Component {...this.props} />
            : null
          }
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      user: state.user
    }
  }

  return connect(mapStateToProps)(AuthenticatedComponent)
}
