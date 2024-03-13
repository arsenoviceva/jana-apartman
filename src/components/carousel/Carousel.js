import image1 from "../../../src/zoricastan/1.jpg";
import image2 from "../../../src/zoricastan/2.jpg";
import image3 from "../../../src/zoricastan/3.jpg";
import image4 from "../../../src/zoricastan/4.jpg";
import image5 from "../../../src/zoricastan/5.jpg";
import image6 from "../../../src/zoricastan/6.jpg";

import "./Carousel.css";

const Carousel = () => {
  return (
    <div clasName="container">
      <div className="titleRow">
        <h3 style={{fontFamily:"Imperial Script, cursive", fontSize:'5rem', color: '#215b75'}}> Galerija</h3>


      </div>

      

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-md-4">
                <a href={image1}>
                <img src={image1} class="d-block w-100" alt="Image 1" />

                </a>
                
              </div>
              <div class="col-md-4">
              <a href={image2}>
                <img src={image2} class="d-block w-100" alt="Image 1" />

                </a>
              </div>
              <div class="col-md-4">
              <a href={image3}>
                <img src={image3} class="d-block w-100" alt="Image 1" />

                </a>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-4">
              <a href={image4}>
                <img src={image4} class="d-block w-100" alt="Image 1" />

                </a>
              </div>
              <div class="col-md-4">
              <a href={image5}>
                <img src={image5} class="d-block w-100" alt="Image 1" />

                </a>
              </div>
              <div class="col-md-4">
              <a href={image6}>
                <img src={image6} class="d-block w-100" alt="Image 1" />

                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    
    
    </div>
  );
};

export default Carousel;