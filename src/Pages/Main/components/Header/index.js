import React from 'react'
import './style.scss'

export const Header = () => {
  return (
    <header className="main container">
      <div className="main__wrapper">
        <a className="main__logo" href="#">
          LOGO
        </a>
        <div className="main__search">
          <label htmlFor="searchInput">HEALTHY PETS</label>
          <input
            className="main__search-input"
            id="searchInput"
            placeholder="Search for ..."
            type="text"
          />
          <button className="main__search-btn">
            <div className="main__search-btn--glass"></div>
          </button>
        </div>
      </div>
      <a className="main__signin" href="#">
        SIGN IN
      </a>
    </header>
  )
}
