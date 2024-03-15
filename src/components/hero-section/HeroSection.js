import './HeroSection.css';

const HeroSection = () => {
  return (

    <section class="hero-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h1>Dobrodošli </h1>
            <p>- Vaš dom daleko od kuće -</p>
            <a href="#about" class="btn btn-primary">
              Saznaj više
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
