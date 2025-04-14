import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero h-[900px]"
        style={{
          backgroundImage:
            "url(https://wallpaper.dog/large/10809219.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-red-600 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
