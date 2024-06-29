function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={poster} />
          </div>    
          <div className="card-content">
          <span className="card-title">{title}</span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
            <br/>
            <p>
              {year} <span className="right">{type}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Movie };
