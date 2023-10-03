import React from 'react'
import './style.scss'

export const SliderItem = ({ item }) => {
  return (
    <div className="sliderItem">
      <img className="sliderItem__img" src={item.img} alt="Img" />
      <a className="sliderItem__text"> {item.text} </a>
    </div>
  )
}
