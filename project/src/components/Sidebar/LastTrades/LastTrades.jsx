import React from 'react'
// import style from './SidebarLeft.css'

const LastTrades = (props) => {
	return (
		<div className="LastTrades">
			<div className="header">
				<h3>ULTIMOS TRADES</h3>
			</div>

			<table class="table table-borderless">
				<thead>
					<tr>
						<th scope="col">HORA</th>
						<th scope="col">MXN <span>PRECIO</span></th>
						<th scope="col">BTC <span>MONTO</span></th>
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