import React, { Component } from 'react'

export default class CalendarDay extends Component {
  render() {
    return (
      <span>{this.props.date.day}</span>
    )
  }
}

