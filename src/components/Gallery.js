import React, { useState } from "react";
import ImageCom from "./Image";
import "./Gallery.css";

const imagesList = [
  { img: "webb1", alt: "Uranus from NIRCam" },
  { img: "webb2", alt: "Cassiopeia A" },
  { img: "webb3", alt: "MACS0416a" },
  { img: "webb4", alt: "Crab Nebula" },
  { img: "webb5", alt: "Orion Nebula",},
  { img: "webb6", alt: "Ring Nebula",},
  { img: "webb7", alt: "Rho Ophiuchi" },
  { img: "webb8", alt: "NGC 5068" },
  { img: "webb9", alt: "NGC 346" },
  { img: "webb10", alt: "WR 124" },
  { img: "webb11", alt: "NGC 1433" },
  { img: "webb12", alt: "NGC 5468",},
];

const Gallery = () => {
  const [rootWidth] = useState(window.innerWidth);
  const [initialOptions] = useState({
    w: rootWidth > 768 ? Math.floor((rootWidth - 60) / 4) : rootWidth,
    h: "",
    fit: "contain",
    position: "center",
  });

  return (
    <div id="gallery" className="gallery-container" role="listbox">
      {imagesList.map((image, idx) => (
        <ImageCom
          key={idx}
          idx={idx}
          image={image.img}
          alt={image.alt}
          initOptions={initialOptions}
        />
      ))}
    </div>
  );
};

export default Gallery;
