import React from 'react'
import './style.scss'
import cat from './img/cat.png'

export const TopPart = () => {
  return (
    <div className="topPart container">
      <img className="topPart__img" src={cat} alt="Cat" />
      <div className="topPart__wrapper">
        <h1 className="topPart__title">
          <span className="topPart__title-fst">Your</span>
          <span className="topPart__title-sc">Pet</span>
          <span className="topPart__title-fst">,</span>
          <span className="topPart__title-fst">Our</span>
          <span className="topPart__title-thd">Passion</span>
        </h1>
        <p className="topPart__desc lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="topPart__desc sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="topPart__btn">Lorem Ipsum </button>
      </div>
    </div>
  )
}
