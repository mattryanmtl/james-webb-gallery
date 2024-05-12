import React, { useState } from "react";
import "./Image.css";
import WholeImageView from "./WholeImageView";

const ImageCom = ({ idx, image, alt, initOptions }) => {
  const options = { ...initOptions };
  if (idx <= 3) {
    options.h = Math.floor(options.w * 0.75);
    options.fit = "fill";
  }
  const [isOpen, setIsOpen] = useState(false);
  const [scrollH, setScrollH] = useState(0);
  const baseUrl = process.env.PUBLIC_URL + ".netlify/images?url=/";
  const imageURL = baseUrl + image + ".jpg&" + new URLSearchParams(options);

  const containerClass = isOpen ? "img-field-fullscreen" : "img-field";
  const handleImageClick = () => {
    let scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    }, 10);
    setScrollH(scrollTop);
    setIsOpen(true);
  };

  const handleCloseButton = () => {
    setTimeout(() => {
      window.scrollTo(0, scrollH);
    }, 10);
    document.body.style.overflow = "";
    setIsOpen(false);
  };

  return (
    <div className={containerClass}>
      {!isOpen ? (
        <img src={imageURL} alt={alt} onClick={handleImageClick} />
      ) : (
        <WholeImageView
          imgUrl={imageURL}
          alt={alt}
          options={options}
          onClose={handleCloseButton}
        />
      )}
    </div>
  );
};

export default ImageCom;
