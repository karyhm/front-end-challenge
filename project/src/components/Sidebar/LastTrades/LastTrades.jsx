import React from 'react'
import style from './LastTrades.css'

const LastTrades = (props) => {
	return (
		<div className="LastTrades">
			<div className="header-block">
				<h4>ULTIMOS TRADES</h4>
			</div>

			<table className="table table-borderless">
				<thead>
					<tr>
						<th scope="col">HORA</th>
						<th scope="col"><span className="currency">MXN</span>PRECIO</th>
						<th scope="col"><span className="currency">BTC</span>PRECIO</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>16:10:25</th>
						<td>319,144.99</td>
						<td>1.094033</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default LastTrades