import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, hex, index }) => {
	let [alert, setAlert] = useState(false) // for display clipboard
	let bcg = rgb.join(',')
	let hexValue = `#${hex}`
	// let hex = rgbToHex(...rgb)

	useEffect(() => {
		let timeout = setTimeout(() => {
			setAlert(false)
    }, 1000)
    
    return () => clearTimeout(timeout) // clean up function 
	}, [alert]) // call useEffect when 'alert' is changing

	return (
		<article
			className={`color ${index > 10 && 'color-light'}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
			onClick={() => {
				setAlert(true)
				navigator.clipboard.writeText(hexValue) // copy to clipboard code 
			}}
		>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>{hexValue}</p>
			{alert && <p>copied to clipboard</p>}
		</article>
	)
}

export default SingleColor
