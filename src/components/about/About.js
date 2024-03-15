import "./About.css";

const About = () => {
  return (
    <div clasName="container" id="about">
      <div className="titleRow">
        <h3
          style={{
            fontFamily: "Imperial Script, cursive",
            fontSize: "5rem",
            color: "#215b75",
          }}
        >
          {" "}
          O nama
        </h3>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <p className="apartment-info"> Apartman Jana se nalazi u centru grada Bijeljina. Prostrani apartman ima 81m2,sadrži 2 spavaće sobe, flat-screen TV sa kablovskim kanalima i potpuno opremljenu kuhinju koja gostima nudi rernu, mikrotalasnu pećnicu, mašinu za pranje veša, frižider i ploču za kuvanje.
            <br/>Na mirnoj lokaciji, preko puta gradskog parka i na 2 minuta hoda do centra grada. 
            <br/>Apartman posjeduje i besplatan privatni parking.
            <br/> Najbliži aerodrom je Međunarodni aerodrom Tuzla, udaljen 67 km od Apartmana Jana, a Aerodrom Nikola Tesla u Beogradu na 120 km </p>
            <br/>   
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
