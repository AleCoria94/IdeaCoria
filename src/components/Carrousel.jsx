function Carrousel (){
    return <>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://http2.mlstatic.com/D_NQ_893119-MLA49703439225_042022-OO.webp" className="d-block w-100" width="1024" height='300' alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://http2.mlstatic.com/D_NQ_890120-MLA49714125729_042022-OO.webp" className="d-block w-100" width="1024" height='300' alt="height: 350px"/>
    </div>
    <div className="carousel-item">
      <img src="https://http2.mlstatic.com/D_NQ_810443-MLA49654450726_042022-OO.webp" className="d-block w-100" width="1024" height='300' alt="height: 350px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
}

export default Carrousel;