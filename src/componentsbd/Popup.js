import React from 'react'



function Popup({ selected, closePopup }) {
	return (
		
		<section className="popup">
			<div className="content">
			<header>
      <div className="header--logo2">
                <img src="https://logodix.com/logo/880238.png"/>
            </div>
        <button type="submit" class="btn2" id="search">
          Adicionar A Minha Lista 
        </button>
      </header>
				
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">IMDB: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} />
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>Editar</button>
				
				<button className="close" onClick={closePopup}>Fechar</button>
			</div>
		</section>
	)
}

export default Popup
