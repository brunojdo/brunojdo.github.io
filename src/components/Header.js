import React from 'react'

const logo =
  'https://s.gravatar.com/avatar/e93480bce84892a336f371360e14a31d?s=80'

const Header = () => (
  <header id="header">
    <span className="flex">
      <img className="rounded-lg" src={logo} alt="" />
    </span>
    <h1>Bruno Dias</h1>
    <p>Welcome to my website</p>
  </header>
)

export default Header
