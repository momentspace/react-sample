import React, { Component } from 'react'
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <CalendarHeader year="2017" month="1"/>
        <CalendarBody year="2017" month="1"/>
      </div>
    )
  }
}
