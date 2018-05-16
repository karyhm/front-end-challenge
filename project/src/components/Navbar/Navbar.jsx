import React from 'react'
import style from './Navbar.css'
const navbar = (props) => {
	return (
		<nav class="navbar navbar-expand-lg">
			<a className="navbar-brand" href="#">
		    <img src="/img/1x/bitso_logo.png" alt="Logo" />
			</a>
			<button className="navbar-toggler" type="button"
				data-toggle="collapse" data-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav mr-auto">
					<li className="divider"></li>
					<li className="nav-item">
						<a className="nav-link" href="#">EXCHANGE</a>
					</li>
				</ul>
				<ul class="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" href="#">1 BTC = 00000MXN</a>
					</li>
					<li className="divider"></li>
					<li className="nav-item dropdown">
						<a className="nav-link" href="#">
							Wallet
							<span class="caret"></span>
						</a>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="#">Action</a>
						</div>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link" href="#">
							Exchange
							<span class="caret"></span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Ayuda</a>
					</li>
					<li className="nav-item dropdown">
						<div class="profile-img">
							<img src="" alt=""/>
						</div>
						<a className="nav-link" href="#">
							Usuario
							<span class="caret"></span>
						</a>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="#">Action</a>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							<label class="switch">
								<input type="checkbox" />
								<span class="slider round"></span>
							</label>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default navbar