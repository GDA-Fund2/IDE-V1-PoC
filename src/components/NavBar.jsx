import React from 'react'
import MetaMaskSigner from './MetaMaskSigner'

export default function NavBar() {
  return (
    <div className="navbar">
        <div className="navbar-inner">
            <div className="container">
                <a className="brand" href="http://www.gda.fund">
                    <img className="logo" src={require('../resources/logo.jpg')}  alt="Logo" />
                </a>
                <h1 className="main-title">
                    <span>ProjectX IDE V1</span>
                </h1>
                {/* <img className="metamask-logo" src={require('../resources/MetaMask_Fox.svg.png')} alt="metamask-logo" /> */}
                <MetaMaskSigner />
            </div>
        </div>
    </div>
  )
}
