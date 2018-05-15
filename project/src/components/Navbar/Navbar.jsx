import React from 'react'
import style from './Navbar.css'
const navbar = (props) => {
	return (
		<nav class="navbar navbar-expand-lg">
			<a className="navbar-brand" href="#">
		    <img src="" alt="Logo" />
			</a>
			<button className="navbar-toggler" type="button"
				data-toggle="collapse" data-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav mr-auto">
					<li className="divider">|</li>
					<li className="nav-item active">
						<a className="nav-link" href="#">EXCHANGE</a>
					</li>
				</ul>
				<ul class="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">1 BTC = 00000MXN</a>
					</li>
					<li className="divider">|</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle"
						data-toggle="dropdown" href="#" role="button" 
						aria-haspopup="true" 
						aria-expanded="false">
							Wallet
						</a>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="#">Action</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle"
						data-toggle="dropdown" href="#" role="button" 
						aria-haspopup="true" 
						aria-expanded="false">
							Exchange
						</a>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="#">Separated link</a>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Ayuda</a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle"
						data-toggle="dropdown" href="#" role="button" 
						aria-haspopup="true" 
						aria-expanded="false">
							Usuario
						</a>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="#">Action</a>
						</div>
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