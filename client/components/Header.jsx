/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Header() {
  return (
    <>
      <header className="ds-header" id="site-header">
        <div className="container">
          <div className="ds-header-inner">
            <a href="index.html" className="ds-logo">
              <span>MJ</span> MARAMATAKA JOURNAL - YOUR DAILY ENERGY
            </a>
            <ul className="ds-social">
              <span> Ngā Mata o te Marama</span>
              <li>
                <a href="#" target="_blank">
                  <i className="ri-stack-overflow-line"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
