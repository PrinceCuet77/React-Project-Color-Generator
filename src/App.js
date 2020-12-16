import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js' // api

function App() {
	let [color, setColor] = useState('') // for user input
	let [error, setError] = useState(false) // for showing error when getting wrong input
	let [list, setList] = useState(new Values('#f15025').all(10)) /// stores all the properties of colors

	let handleSubmit = (e) => {
		e.preventDefault()
		try {
			let colors = new Values(color).all(10) // calling api
			setList(colors)
		} catch (error) {
			setError(true)
		}
	}

	return (
		<>
			<section className='container'>
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder='#f15025'
						className={`${error ? 'error' : null}`}
					/>
					<button className='btn' type='submit'>
						submit
					</button>
				</form>
			</section>
			<section className='colors'>
				{list.map((color, index) => {
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							hex={color.hex}
						/>
					)
				})}
			</section>
		</>
	)
}

export default App
