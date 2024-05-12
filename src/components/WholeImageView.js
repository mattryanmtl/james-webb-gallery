import React, { useState } from "react";
import "./WholeImageView.css";
import loadingGif from "./logo/loading.gif";

const WholeImageView = ({ imgUrl, alt, options, onClose }) => {
  const baseImageURL = imgUrl.split("&")[0];
  const [params, setParams] = useState({ ...options });
  const [imageURL, setImageURL] = useState(baseImageURL);
  const [isShowing, setIsShowing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadingContainerClassname = isLoading
    ? "loading-container"
    : "loading-container hidden";
  const imageClassname = isLoading ? "custom-img hidden" : "custom-img";
  const handleInputChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };
  const handleImageLoad = (e) => {
    if (params.w !== e.target.naturalWidth) {
      setParams({
        ...params,
        w: e.target.naturalWidth,
        h: e.target.naturalHeight,
      });
    }
    setIsLoading(false);
  };
  const handleButtonClick = () => {
    setImageURL(baseImageURL + "&" + new URLSearchParams(params));
    setIsLoading(true);
  };

  const handleImgBtnClick = () => {
    setIsShowing((prev) => !prev);
  };

  return (
    <>
      <div className={loadingContainerClassname}>
        <img
          className="loading-logo"
          src={loadingGif}
          alt="cat can food spinning"
        />
        <p>Loading...</p>
      </div>
      <img
        className={imageClassname}
        src={imageURL}
        alt={alt}
        onLoad={handleImageLoad}
      />
      <div className="input-field">
        <label>
          Width:
          <input
            type="number"
            value={params.w}
            name="w"
            min="2"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Height:
          <input
            type="number"
            value={params.h}
            name="h"
            min="2"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Fit:
          <div className="select-wrapper">
            <select value={params.fit} name="fit" onChange={handleInputChange}>
              <option value="contain">Contain</option>
              <option value="cover">Cover</option>
              <option value="fill">Fill</option>
            </select>
          </div>
        </label>
        <label>
          Position:
          <div className="select-wrapper">
            <select
              value={params.position}
              name="position"
              onChange={handleInputChange}
            >
              <option value="center">Center</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>
        </label>
        <label>
          Quality (1-100):
          <input
            type="number"
            min="1"
            max="100"
            name="quality"
            value={params.quality ?? 75}
            onChange={handleInputChange}
          />
        </label>
        {isShowing ? (
          <div className="url-field">
            <p>{`https://visual-feast-challenge.netlify.app/${imageURL}`}</p>
            <button className="url-btn" onClick={handleImgBtnClick}>
              Hide ImgURL
            </button>
          </div>
        ) : null}
        <div className="btn-field">
          <button className="submit-button" onClick={handleButtonClick}>
            Get an Image
          </button>
          <button className="url-btn" onClick={handleImgBtnClick}>
            Show ImgURL
          </button>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
    </>
  );
};

export default WholeImageView;
