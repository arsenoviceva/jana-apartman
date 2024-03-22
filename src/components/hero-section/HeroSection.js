import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section class="hero-section" id="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h1>Dobrodošli</h1>
            <p>Vaš dom daleko od kuće</p>
            <div className="buttons">
              <a href="#about" class="btn btn-primary">
                Saznaj više
              </a>
              <a
                href="https://www.booking.com/hotel/ba/apartman-jana-bijeljina1.hr.html"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Rezerviši
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
