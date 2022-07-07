import React from 'react'

export default function NavBar() {
  return (
    <div className="navbar">
        <div className="navbar-inner">
            <div className="container">
                <a className="brand" href="http://www.gda.fund">
                    <img className="logo" src="resources/logo.jpg"  alt="Logo" />
                </a>
                <h1 className="main-title">
                    <span>ProjectX IDE V1</span>
                </h1>
                <img className="metamask-logo" src="resources/MetaMask_Fox.svg.png" alt="metamask-logo" />
            </div>
        </div>
    </div>
  )
}
