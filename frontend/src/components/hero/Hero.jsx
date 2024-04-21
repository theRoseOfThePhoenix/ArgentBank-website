import React from "react";

function Hero({ img, alt, titles, text }) {
  return (
    <div className="hero">
      <img src={img} alt={alt} />
      <div className="hero_content-wrapper">
        <div className="hero_content">
          {titles &&
            titles.map(
              (
                /** @type {string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined} */ title,
                /** @type {React.Key | null | undefined} */ index
              ) => (
                <p key={index} className="hero_subtitle">
                  {title}
                </p>
              )
            )}
          <p className="hero_text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
