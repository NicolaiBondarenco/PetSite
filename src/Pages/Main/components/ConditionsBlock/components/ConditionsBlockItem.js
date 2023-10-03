import React from 'react'
import './style.scss'

export const ConditionsBlockItem = ({ num }) => {
  return (
    <div className="conditionsBlockItem">
      <p className="conditionsBlockItem__num">{num}</p>
      <div className="conditionsBlockItem__box">
        <p className="conditionsBlockItem__box--text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="conditionsBlockItem__box--text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="conditionsBlockItem__box--text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="conditionsBlockItem__price">
        <p className="conditionsBlockItem__price-price">$ 00</p>
        <p className="conditionsBlockItem__price-time">1 MONTH</p>
        <p className="conditionsBlockItem__price-text">
          Lorem Ipsum is simply dummy text
        </p>
      </div>
    </div>
  )
}
