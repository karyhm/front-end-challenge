import React from 'react'
import style from './Summary.css'

const nav = (props) => {
	return (
		<div className="Summary">
			<ul className="nav">
				<li className="currency">
					<a className="nav-link" href="#">
						BTC/MXN
						<span className="caret"></span>
					</a>
				</li>
				<li className="nav-item">
					<label>Volumen 24 hrs.</label>
					<span>170.5405818 BTC</span>
				</li>
				<li className="nav-item">
					<label>Max.</label>
					<span>304,934.23 MXN</span>
				</li>
				<li className="nav-item">
					<label>Min.</label>
					<span>274,934.23 MXN</span>
				</li>
				<li className="nav-item">
					<label>Variacion.</label>
					<span>+4, 061.68 MXN (1.4%)</span>
				</li>
			</ul>
		</div>
	)
}

export default nav