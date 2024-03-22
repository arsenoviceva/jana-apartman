import "./Gallery.css";

import * as React from "react";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./data.ts";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Images from "./Images.tsx";

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div clasName="container" id="galery">
      <div className="titleRow">
        <h3 className="title">Galerija</h3>
      </div>

      <Images
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions, Thumbnails]}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </div>
  );
};

export default Gallery;
