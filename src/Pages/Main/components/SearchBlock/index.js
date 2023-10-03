import React from 'react'
import './style.scss'

export const SearchBlock = () => {
  return (
    <div className="searchBlock">
      <div className="searchBlock__wrapper">
        <label className="searchBlock__label" htmlFor="search">
          HEALTHY PETS
        </label>
        <input
          className="searchBlock__input"
          id="search"
          placeholder="Search for ..."
          type="text"
        />
        <button className="searchBlock__btn">
          <div className="searchBlock__btn-glass"></div>
        </button>
      </div>
    </div>
  )
}
