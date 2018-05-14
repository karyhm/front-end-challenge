import React from 'react'
import style from './Navbar.css'
const navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">
				<img src="" alt="Logo"/>
			</a> | <span>EXCHANGE</span>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">1 BTC = 00000MXN</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Wallet</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Exchanghe</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Ayuda</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Usuario</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Switch</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default navbar