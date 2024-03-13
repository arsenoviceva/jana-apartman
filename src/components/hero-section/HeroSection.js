import './HeroSection.css';

const HeroSection = () => {
  return (

    <section class="hero-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h1>Dobrodosli </h1>
            <p>- Vaš dom daleko od kuće -</p>
            <a href="#" class="btn btn-primary">
              Provjeri dostupnost
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
