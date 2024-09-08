function Card(props) {
	return (
		<>
			<div className="card">
      			<div className="img-container">
        			<img src={props.img} alt="avatar_img"/>
					<div className="info-container">
						<p>{props.id}</p>
						<h2>{props.name}</h2>
						<p>Release: {props.year}</p>
					</div>
      			</div>
    		</div>
		</>
	)
}

export default Card;