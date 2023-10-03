import React from 'react'
import { ConditionsBlockItem } from './components/ConditionsBlockItem'
import './style.scss'

export const ConditionsBlock = () => {
  return (
    <div className="conditionsBlock">
      <h2 className="conditionsBlock__title">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h2>
      <p className="conditionsBlock__desc">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="conditionsBlock__wrapper">
        <ConditionsBlockItem num="1" />
        <ConditionsBlockItem num="3" />
      </div>
    </div>
  )
}
