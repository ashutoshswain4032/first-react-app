function Place(props) {
  var img = "https://source.unsplash.com/1600x1000/?" + props.image;
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <div className="card-body">
        <img src={img} alt="" />
        <p className="rate">{props.rating}/5</p>
        <div className={props.best}>Must Visit !!</div>
      </div>
      <p>{props.description}</p>
    </div>
  );
}
export default Place;
