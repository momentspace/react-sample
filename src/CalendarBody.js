import React, { Component } from 'react'
import * as moment from 'moment'
// import CalendarDay from './CalendarDay'

export default class CalendarBody extends Component {
  render() {
    let first = moment(`${this.props.year}-${this.props.month}-01`)
    let last = first.endOf('month')
    let days = moment.range(first, last).map((m) => {
      <div>m.day</div>
    })

    return (
      <div>
        {days}
      </div>
    )
  }
}

