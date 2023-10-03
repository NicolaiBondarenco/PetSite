import React from 'react'
import { Slider } from './components/Slider'
import './style.scss'

export const Product = () => {
  return (
    <div className="product container">
      <h1 className="product__title">Lorem Ipsum </h1>
      <p className="product__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Slider />
    </div>
  )
}
