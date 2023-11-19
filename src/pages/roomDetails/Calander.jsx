import React from 'react'
import { DateRange } from 'react-date-range';

const Calander = ({selectionRange}) => {
  return (
    <div>
        <DateRange ranges={[selectionRange]} />
    </div>
  )
}

export default Calander