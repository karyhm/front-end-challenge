import React from 'react'
import style from './Summary.css'

const nav = (props) => {
	return (
		<div className="Summary">
			<ul class="navbar-nav mr-auto">
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle"
					data-toggle="dropdown" href="#" role="button" 
					aria-haspopup="true" 
					aria-expanded="false">
						BTC/MXN
					</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="#">Action</a>
					</div>
				</li>
				<li className="nav-item active">
					<label>Volumen 24 hrs.</label>
					<span>170.5405818 BTC</span>
				</li>
				<li className="nav-item active">
					<label>Max.</label>
					<span>304,934.23 MXN</span>
				</li>
				<li className="nav-item active">
					<label>Min.</label>
					<span>274,934.23 MXN</span>
				</li>
				<li className="nav-item active">
					<label>Variacion.</label>
					<span>+4, 061.68 MXN (1.4%)</span>
				</li>
			</ul>
		</div>
	)
}

export default nav