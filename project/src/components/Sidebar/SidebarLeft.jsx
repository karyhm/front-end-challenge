import React from 'react'
import style from './SidebarLeft.css'

import LastTrades from './LastTrades/LastTrades'

const SidebarLeft = (props) => {
	return (
		<div className="SidebarLeft">
			<LastTrades />	
		</div>
	)
}

export default SidebarLeft