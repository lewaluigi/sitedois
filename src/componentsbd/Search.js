import React from 'react'
import './popup.css';

function Search ({ handleInput, search }) {
	return (
		<section className="searchbox-wrap">
			<input 
				type="text" 
				placeholder="Procurar filme" 
				className="searchbox" 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	)
}

export default Search
