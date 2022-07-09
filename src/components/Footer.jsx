function Footer (){
    return <>

<footer className="text-center text-lg-start bg-light text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    <div className="me-5 d-none d-lg-block">
      <span>Redes sociales:</span>
    </div>

    <div>
      <a href="/facebook/vomea" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="/twitter/@vomea" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="/google/vomea" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="/instagram/vomea" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="/linkedin/vomea" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="/github/vomea" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Vomea
          </h6>
          <a href="#!" className="text-reset">Insertar futuro logo</a>

        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Categorías
          </h6>
          <p>
            <a href="#!" className="text-reset">Sillas</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Sillones</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Bazar</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Disabled</a>
          </p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Links útiles
          </h6>
          <p>
            <a href="#!" className="text-reset">Terminos y Condiciones</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Preguntas frecuentes</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Blog</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Trabajá con nosotros</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Contacto
          </h6>
          <p><i className="fas fa-home me-3"></i>Libertador 456896, CABA</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@vomea.com
          </p>
          <p><i className="fas fa-phone me-3"></i>(011) 1234 5678</p>
          <p><i className="fas fa-print me-3"></i> 11-7612-3456</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4">
    © 2022 Copyright:
    <a className="text-reset fw-bold" href="/">Vomea</a>
  </div>
</footer>
    </>
}
export default Footer;