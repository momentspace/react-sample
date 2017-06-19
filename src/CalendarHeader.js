import React, { Component } from 'react'

export default class CalendarHeader extends Component {
  render() {
    return (
      <h1>{this.props.month} month calendar</h1>
    )
  }
}
